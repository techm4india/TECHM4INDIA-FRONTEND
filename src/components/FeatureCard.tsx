import { ReactNode } from 'react'

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  const isDark = className.includes('bg-purple') || className.includes('bg-gray-900') || className.includes('bg-black')
  
  return (
    <div className={`${isDark ? 'bg-purple-900/20 border-2 border-purple-500/30 professional-card-home' : 'bg-white'} p-6 rounded-xl shadow-md ${className}`}>
      {icon && (
        <div className={`mb-4 inline-block p-3 rounded-lg ${isDark ? 'text-purple-400 bg-purple-500/20' : 'text-primary-600 bg-primary-50'}`}>
          {icon}
        </div>
      )}
      <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </div>
  )
}

