'use client'

import { useEffect, useRef, useState } from 'react'
import FlowingDot from './FlowingDot'

interface PipelineEdgeProps {
  startX: number
  startY: number
  endX: number
  endY: number
  color?: string
  isMobile?: boolean
}

export default function PipelineEdge({
  startX,
  startY,
  endX,
  endY,
  color = 'var(--flow-color)',
  isMobile = false,
}: PipelineEdgeProps) {
  const [pathData, setPathData] = useState('')
  const pathId = useRef(`path-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    const dx = endX - startX
    const dy = endY - startY
    
    if (isMobile) {
      setPathData(`M ${startX} ${startY} L ${endX} ${endY}`)
    } else {
      const cp1x = startX + dx * 0.4
      const cp1y = startY
      const cp2x = endX - dx * 0.4
      const cp2y = endY
      setPathData(`M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`)
    }
  }, [startX, startY, endX, endY, isMobile])

  return (
    <g>
      <path
        id={pathId.current}
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.2"
      />
      
      <path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.6"
        strokeDasharray="8 8"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      <FlowingDot pathId={pathId.current} delay={0} duration={3} color={color} size={4} />
      <FlowingDot pathId={pathId.current} delay={0.75} duration={3} color={color} size={3} />
      <FlowingDot pathId={pathId.current} delay={1.5} duration={3} color={color} size={4} />
      <FlowingDot pathId={pathId.current} delay={2.25} duration={3} color={color} size={3} />
      
      {!isMobile && (
        <>
          <FlowingDot pathId={pathId.current} delay={0.5} duration={2.5} color={color} size={3} />
          <FlowingDot pathId={pathId.current} delay={1.75} duration={2.5} color={color} size={3} />
        </>
      )}
    </g>
  )
}