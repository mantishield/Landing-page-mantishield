import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <div
      className={`
        bg-black border border-white p-6
        ${hoverable ? 'group transition-none hover:bg-white hover:text-black' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
