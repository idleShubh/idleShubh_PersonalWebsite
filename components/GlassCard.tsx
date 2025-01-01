import { ReactNode } from 'react'

interface GlassCardProps {
  title: string
  content?: string
  className?: string
  children?: ReactNode
}

export default function GlassCard({ title, content, className = '', children }: GlassCardProps) {
  return (
    <div className={`rounded-lg p-6 backdrop-blur-md bg-white/10 border border-white/20 
      transition-all duration-300 ease-in-out cursor-pointer
      hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02]
      hover:border-white/30 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {content && <p>{content}</p>}
      {children}
    </div>
  )
}
