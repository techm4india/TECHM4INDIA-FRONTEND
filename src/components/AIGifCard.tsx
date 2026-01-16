import { ReactNode } from 'react'

interface AIGifCardProps {
  gifUrl: string
  title: string
  description: string
  fallbackIcon?: ReactNode
  alt?: string
}

export default function AIGifCard({ gifUrl, title, description, fallbackIcon, alt }: AIGifCardProps) {
  return (
    <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6 overflow-hidden group hover:border-purple-400 transition-colors">
      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-purple-800/20 relative">
        <img 
          src={gifUrl} 
          alt={alt || title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback if GIF fails to load
            const parent = e.currentTarget.parentElement
            if (parent && !parent.querySelector('.fallback-content')) {
              const fallback = document.createElement('div')
              fallback.className = 'fallback-content w-full h-full flex items-center justify-center text-purple-400'
              if (fallbackIcon) {
                fallback.appendChild(fallbackIcon as any)
              } else {
                fallback.innerHTML = '<div class="text-4xl">🤖</div>'
              }
              e.currentTarget.style.display = 'none'
              parent.appendChild(fallback)
            }
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
