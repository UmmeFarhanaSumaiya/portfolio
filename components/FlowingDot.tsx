'use client'

interface FlowingDotProps {
  pathId: string
  delay?: number
  duration?: number
  color?: string
  size?: number
}

export default function FlowingDot({
  pathId,
  delay = 0,
  duration = 3,
  color = 'var(--flow-color)',
  size = 4,
}: FlowingDotProps) {
  return (
    <circle r={size} fill={color}>
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur={`${duration}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
      />
    </circle>
  )
}