import { useNavigate } from 'react-router-dom'
import { Sparkles, Rocket, Zap, Activity } from 'lucide-react'
import Shuffle from '../components/Shuffle'

export default function LaunchPage() {
  const navigate = useNavigate()

  const stats = [
    { label: 'Divisions Ready', value: '4', icon: <Sparkles className="w-5 h-5" /> },
    { label: 'Programs Lined Up', value: '25+', icon: <Activity className="w-5 h-5" /> },
    { label: 'Global Partners', value: '12', icon: <Zap className="w-5 h-5" /> },
  ]

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500/40 rounded-full blur-3xl" />
        <div className="absolute top-20 left-0 w-72 h-72 bg-secondary-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center space-y-12">
        <div className="space-y-6">
          <Shuffle
            text="TechM4India Mission Control"
            tag="p"
            className="text-primary-300 uppercase tracking-[0.4em] text-xs md:text-sm"
            duration={0.4}
            stagger={0.02}
            triggerOnce={false}
            triggerOnHover={true}
            colorTo="#60a5fa"
          />
          <div className="w-full max-w-5xl mx-auto px-4">
            <Shuffle
              text="India's First Unified Innovation Ecosystem"
              tag="h1"
              className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-center"
              style={{ 
                wordBreak: 'keep-all', 
                hyphens: 'none',
                whiteSpace: 'normal',
                display: 'block'
              }}
              duration={0.5}
              stagger={0.03}
              triggerOnce={false}
              triggerOnHover={true}
              colorFrom="#9ca3af"
              colorTo="#ffffff"
              shuffleTimes={2}
            />
          </div>
          <div className="w-full max-w-4xl mx-auto px-4">
            <Shuffle
              text="From K-12 STEM Labs to Space Research — One Seamless Journey Transforming Students into Innovators, Researchers, and Global Leaders"
              tag="p"
              className="text-lg md:text-xl text-gray-300 leading-relaxed text-center"
              style={{ 
                wordBreak: 'normal', 
                lineHeight: '1.7',
                whiteSpace: 'normal',
                display: 'block'
              }}
              duration={0.35}
              stagger={0.015}
              triggerOnce={false}
              triggerOnHover={true}
              colorTo="#d1d5db"
              maxDelay={0.1}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-left flex items-center space-x-4 backdrop-blur">
              <div className="p-3 rounded-xl bg-white/10 text-primary-200">{stat.icon}</div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm uppercase tracking-wide text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/launch')}
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform relative overflow-hidden group"
          >
            <Rocket className="w-5 h-5 mr-3 z-10" />
            <Shuffle
              text="Launch India's Innovation Revolution"
              tag="span"
              className="z-10"
              duration={0.3}
              stagger={0.02}
              triggerOnce={false}
              triggerOnHover={true}
              colorTo="#ffffff"
              shuffleDirection="left"
              threshold={0}
              rootMargin="0px"
            />
          </button>
          <Shuffle
            text="Experience the Future of Education — Where Every Student Becomes a Creator"
            tag="p"
            className="text-sm uppercase tracking-[0.2em] text-gray-400 max-w-2xl"
            duration={0.25}
            stagger={0.01}
            triggerOnce={false}
            triggerOnHover={true}
            colorTo="#9ca3af"
          />
        </div>
      </div>
    </div>
  )
}

