import { Rocket, Sparkles, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function LaunchPad() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white relative overflow-hidden flex items-center justify-center px-6">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_55%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-white/40 blur-[1px] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-sm tracking-wide uppercase text-gray-200">Mission Control</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to the TechM4India Launch Experience
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Before we step into the full platform, initiate the launch sequence and watch our mission ignite.
          Brace for a countdown that leads straight into the heart of India's first experiential learning ecosystem.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
          <div className="flex items-center space-x-3 bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
            <Zap className="w-8 h-8 text-amber-400" />
            <div className="text-left">
              <p className="text-sm uppercase tracking-wide text-gray-300">Status</p>
              <p className="text-xl font-semibold text-white">Systems Nominal</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
            <Rocket className="w-8 h-8 text-emerald-400" />
            <div className="text-left">
              <p className="text-sm uppercase tracking-wide text-gray-300">Mission</p>
              <p className="text-xl font-semibold text-white">TechM4India Portal</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/countdown')}
          className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-lg font-semibold shadow-2xl shadow-purple-500/40 hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          <Rocket className="w-6 h-6 mr-3" />
          Initiate Launch Sequence
        </button>
      </div>
    </div>
  )
}

