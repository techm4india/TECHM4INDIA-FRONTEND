import { useNavigate } from 'react-router-dom'
import { Sparkles, Rocket, Zap, Activity } from 'lucide-react'
import Shuffle from '../components/Shuffle'
import LaunchButton from '../components/LaunchButton'
import Header from '../components/Header'
import './LaunchPage.css'

export default function LaunchPage() {
  const navigate = useNavigate()

  const stats = [
    { label: 'Divisions Ready', value: '4', icon: <Sparkles className="w-5 h-5" /> },
    { label: 'Programs Lined Up', value: '25+', icon: <Activity className="w-5 h-5" /> },
    { label: 'Global Partners', value: '12', icon: <Zap className="w-5 h-5" /> },
  ]

  return (
    <div className="landing-page-bg text-white overflow-hidden">
      <Header />

      <div className="landing-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center text-center space-y-12">
        {/* Landing Image */}
        <div className="w-full max-w-5xl mx-auto mb-8 relative z-10">
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
            <img 
              src="/861763.jpg" 
              alt="TechM4India Innovation Ecosystem" 
              className="w-full h-auto object-cover rounded-2xl"
              style={{ maxHeight: '600px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="space-y-6">
          <Shuffle
            text="TechM4India Mission Control"
            tag="p"
            className="text-purple-400 uppercase tracking-[0.4em] text-xs md:text-sm font-semibold"
            duration={0.4}
            stagger={0.02}
            triggerOnce={false}
            triggerOnHover={true}
            colorTo="#a78bfa"
          />
          <div className="w-full max-w-5xl mx-auto px-4">
            <Shuffle
              text="India's First Unified Innovation Ecosystem"
              tag="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-center shimmer-text"
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="professional-card"
            >
              <div className="flex items-center space-x-4 text-left">
                <div className="professional-card-icon text-purple-300 flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="relative z-2">
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm uppercase tracking-wide text-gray-400">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="launch-area space-y-4">
          <LaunchButton 
            onLaunch={() => navigate('/home')}
            countdownSeconds={10}
          />
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

