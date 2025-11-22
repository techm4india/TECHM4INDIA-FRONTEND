import { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  cta?: ReactNode
  className?: string
}

export default function Hero({ title, subtitle, description, cta, className = '' }: HeroProps) {
  return (
    <section className={`relative py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {subtitle && (
            <p className="text-primary-600 font-semibold mb-4 uppercase tracking-wide text-sm">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {cta && <div className="flex justify-center">{cta}</div>}
        </div>
      </div>
    </section>
  )
}

