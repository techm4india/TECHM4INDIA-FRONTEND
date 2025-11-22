import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const totalSeconds = 10

export default function LaunchCountdown() {
  const [count, setCount] = useState(totalSeconds)
  const navigate = useNavigate()

  useEffect(() => {
    if (count === 0) {
      const redirect = setTimeout(() => navigate('/home'), 800)
      return () => clearTimeout(redirect)
    }
    const timer = setTimeout(() => setCount((prev) => prev - 1), 1000)
    return () => clearTimeout(timer)
  }, [count, navigate])

  const progress = ((totalSeconds - count) / totalSeconds) * 100

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="relative z-10 text-center space-y-8 max-w-2xl px-6">
        <p className="text-sm uppercase tracking-[0.4em] text-primary-400">Launch sequence in progress</p>
        <div className="text-[8rem] md:text-[10rem] font-black leading-none drop-shadow-lg">
          {count}
        </div>
        <p className="text-gray-300 text-lg md:text-xl">
          Engines are powered, guidance is locked, and mission control is green.
          Brace your co-founders for an experience that takes TechM4India to orbit.
        </p>

        <div className="space-y-3">
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-center text-sm uppercase tracking-[0.4em] text-gray-400">
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Preparing Home Experience
          </div>
        </div>
      </div>
    </div>
  )
}

