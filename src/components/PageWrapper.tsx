import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`dark-bg-page ${className}`}>
      <div className="dark-bg-content">
        {children}
      </div>
    </div>
  )
}

