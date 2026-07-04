'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { pipelineNodes } from '@/data/pipelineData'
import PipelineNode from './PipelineNode'
import PipelineEdge from './PipelineEdge'

interface PipelineHeroProps {
  onNodeClick: (sectionId: string) => void
}

export default function PipelineHero({ onNodeClick }: PipelineHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const nodes = container.querySelectorAll('[data-node]')
      const positions: { x: number; y: number }[] = []

      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        positions.push({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        })
      })

      setNodePositions(positions)
    }

    const timer = setTimeout(calculatePositions, 100)
    window.addEventListener('resize', calculatePositions)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculatePositions)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-12">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-4xl font-bold font-mono">
            <span className="text-[var(--flow-color)]">$</span> python3 sumaiya.py --init
          </h1>
          <p className="text-sm text-[var(--text-secondary)] font-mono mt-2">
            <span className="text-[var(--flow-color)]">&gt;</span> initializing portfolio
            <span className="animate-pulse">_</span>
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative"
          style={{
            minHeight: isMobile ? '500px' : '400px',
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            {nodePositions.length === pipelineNodes.length && (
              <>
                {pipelineNodes.map((node, index) => {
                  if (index === pipelineNodes.length - 1) return null
                  const start = nodePositions[index]
                  const end = nodePositions[index + 1]
                  if (!start || !end) return null
                  return (
                    <PipelineEdge
                      key={`edge-${node.id}`}
                      startX={start.x}
                      startY={start.y}
                      endX={end.x}
                      endY={end.y}
                      isMobile={isMobile}
                      color={node.color}
                    />
                  )
                })}
              </>
            )}
          </svg>

          <div
            className={`relative z-10 ${isMobile
              ? 'flex flex-col items-center gap-8'
              : 'grid grid-cols-4 gap-x-6 gap-y-10 place-items-center'
              }`}
            style={{
              minHeight: isMobile ? '500px' : 'auto',
            }}
          >
            {pipelineNodes.map((node, index) => {
              // Snake layout (desktop only):
              // Row 1 -> Raw Data, Education, Experience, Skills (col 1-4)
              // Row 2 -> col1, col2 empty; Contact at col3, Projects at col4
              let gridColumn: string | undefined
              let gridRow: string | undefined

              if (!isMobile) {
                if (index === 4) {
                  // Projects -> directly under Skills
                  gridColumn = '4'
                  gridRow = '2'
                } else if (index === 5) {
                  // Contact -> left of Projects
                  gridColumn = '3'
                  gridRow = '2'
                }
              }

              return (
                <div
                  key={node.id}
                  data-node
                  style={{ gridColumn, gridRow }}
                >
                  <PipelineNode
                    node={node}
                    index={index}
                    isMobile={isMobile}
                    onClick={onNodeClick}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="flex flex-col items-center gap-2 text-[var(--text-secondary)] text-sm font-mono">
            <span>⬇ scroll for details</span>
            <div className="w-px h-8 bg-gradient-to-b from-[var(--flow-color)] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}