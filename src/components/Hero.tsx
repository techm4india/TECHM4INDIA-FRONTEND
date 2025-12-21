import { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  cta?: ReactNode
  className?: string
}

export default function Hero({ title, subtitle, description, cta, className = '' }: HeroProps) {
  const isDark = className.includes('hero-bg') || className.includes('dark-bg')
  const isFullPage = className.includes('full-page') || className.includes('hero-bg-unified')
  
  return (
    <section className={`relative ${isFullPage ? 'min-h-screen flex items-center justify-center py-20' : 'py-20'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {subtitle && (
            <p className={`font-semibold mb-4 uppercase tracking-wide text-sm ${isDark ? 'text-white/80' : 'text-primary-600'}`}>
              {subtitle}
            </p>
          )}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h1>
          {description && (
            <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${isDark ? 'text-white/90' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
          {cta && <div className="flex justify-center gap-4 flex-wrap">{cta}</div>}
        </div>
      </div>
    </section>
  )
}

