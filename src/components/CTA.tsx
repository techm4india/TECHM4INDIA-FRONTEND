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
          className="inline-flex items-center px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 hover:border-purple-600"
        >
          {primary.text}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      )}
      {secondary && (
        <Link
          to={secondary.link}
          className="inline-flex items-center px-6 py-3 bg-transparent text-white border border-purple-600/60 rounded-md hover:bg-purple-900/40 hover:border-purple-500 font-medium"
        >
          {secondary.text}
        </Link>
      )}
    </div>
  )
}

