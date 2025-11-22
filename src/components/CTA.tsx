import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  primary?: {
    text: string
    link: string
  }
  secondary?: {
    text: string
    link: string
  }
  className?: string
}

export default function CTA({ primary, secondary, className = '' }: CTAProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {primary && (
        <Link
          to={primary.link}
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-lg hover:shadow-xl"
        >
          {primary.text}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      )}
      {secondary && (
        <Link
          to={secondary.link}
          className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
        >
          {secondary.text}
        </Link>
      )}
    </div>
  )
}

