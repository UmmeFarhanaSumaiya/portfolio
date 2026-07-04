'use client'

import { motion } from 'framer-motion'
import { PipelineNode as NodeType } from '@/data/pipelineData'
import { IconType } from 'react-icons'

interface PipelineNodeProps {
  node: NodeType
  index: number
  isMobile?: boolean
  onClick: (sectionId: string) => void
}

export default function PipelineNode({
  node,
  index,
  isMobile = false,
  onClick,
}: PipelineNodeProps) {
  const Icon: IconType = node.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      onClick={() => onClick(node.sectionId)}
      className="glass-card p-4 md:p-6 cursor-pointer group hover-glow relative flex flex-col"
      style={{
        minWidth: isMobile ? '100%' : '200px',
        maxWidth: isMobile ? '100%' : '200px',
        height: isMobile ? 'auto' : '240px',
        borderColor: `rgba(${hexToRgb(node.color)}, 0.3)`,
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 40px -10px ${node.color}`,
        }}
      />

      <div className="relative z-10">
        {/* Icon with colored background */}
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-2 md:mb-3"
          style={{ backgroundColor: `${node.color}20` }}
        >
          <Icon
            className="w-5 h-5 md:w-6 md:h-6"
            style={{ color: node.color }}
          />
        </div>

        {/* Label */}
        <h3 className="text-sm md:text-base font-bold text-[var(--text-primary)]">
          {node.label}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-[var(--text-secondary)] opacity-60 font-mono">
          {node.subtitle}
        </p>

        {/* Description - shows on hover */}
        <div className="mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-[var(--text-secondary)] font-medium">
            {node.description}
          </p>
          <p className="text-[10px] text-[var(--text-secondary)] opacity-70 font-mono">
            {node.details}
          </p>
        </div>

        {/* Click indicator */}
        <div className="mt-2 text-[10px] text-[var(--text-secondary)] opacity-50 font-mono group-hover:opacity-100 transition-opacity">
          click →
        </div>
      </div>
    </motion.div>
  )
}

// Helper function to convert hex to rgb for rgba usage
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return '108, 99, 255'
  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)
  return `${r}, ${g}, ${b}`
}