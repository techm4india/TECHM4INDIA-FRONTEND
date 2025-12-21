import { useState, useEffect, useRef } from 'react'
import { Rocket, Sparkles, Zap } from 'lucide-react'
import './LaunchButton.css'

interface LaunchButtonProps {
  onLaunch?: () => void
  countdownSeconds?: number
}

export default function LaunchButton({ onLaunch, countdownSeconds = 10 }: LaunchButtonProps) {
  const [countdown, setCountdown] = useState<number | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [particleKey, setParticleKey] = useState(0)
  const [rippleKey, setRippleKey] = useState(0)
  const [glitchActive, setGlitchActive] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (countdown === null) {
      setIsActive(true)
      setCountdown(countdownSeconds)
    }
  }

  useEffect(() => {
    if (countdown === null || countdown === 0) {
      if (countdown === 0 && onLaunch) {
        const launchTimer = setTimeout(() => {
          setIsActive(false)
          onLaunch()
        }, 1200)
        return () => clearTimeout(launchTimer)
      }
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    // Regenerate particles every 0.5 seconds for continuous effect
    const particleTimer = setInterval(() => {
      if (countdown > 0) {
        setParticleKey(prev => prev + 1)
      }
    }, 500)

    // Create ripple effects every 0.3 seconds
    const rippleTimer = setInterval(() => {
      if (countdown > 0) {
        setRippleKey(prev => prev + 1)
      }
    }, 300)

    // Glitch effect randomly
    const glitchTimer = setInterval(() => {
      if (countdown > 0 && Math.random() > 0.7) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 150)
      }
    }, 800)

    return () => {
      clearTimeout(timer)
      clearInterval(particleTimer)
      clearInterval(rippleTimer)
      clearInterval(glitchTimer)
    }
  }, [countdown, onLaunch])

  const progress = countdown !== null ? ((countdownSeconds - countdown) / countdownSeconds) * 100 : 0

  return (
    <div className="launch-button-container">
      {/* Outer energy field */}
      {isActive && countdown !== null && countdown > 0 && (
        <div className="energy-field"></div>
      )}
      
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`launch-button ${isActive ? 'active' : ''} ${countdown === 0 ? 'launching' : ''} ${glitchActive ? 'glitch' : ''}`}
        disabled={isActive && countdown !== null && countdown > 0}
        style={{
          '--progress': `${progress}%`,
          '--countdown': countdown || 0,
        } as React.CSSProperties}
      >
        {/* Multiple background layers */}
        <div className="launch-button-bg"></div>
        <div className="launch-button-bg-2"></div>
        <div className="launch-button-shine"></div>
        <div className="holographic-overlay"></div>
        
        {/* Energy waves */}
        {isActive && countdown !== null && countdown > 0 && (
          <>
            <div className="energy-wave wave-1"></div>
            <div className="energy-wave wave-2"></div>
            <div className="energy-wave wave-3"></div>
          </>
        )}

        {/* Ripple effects */}
        {isActive && countdown !== null && countdown > 0 && (
          <div className="ripple-container" key={rippleKey}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="ripple" style={{ '--ripple-delay': `${i * 0.2}s` } as React.CSSProperties}></div>
            ))}
          </div>
        )}
        
        {/* Content */}
        <div className="button-content">
          {countdown === null ? (
            <>
              <Rocket className="launch-icon" />
              <span className="launch-text">Launch India's Innovation Revolution</span>
            </>
          ) : countdown > 0 ? (
            <>
              <div className="countdown-display">
                <Sparkles className="sparkle-icon" />
                <span className="countdown-number">{countdown}</span>
                <Zap className="zap-icon" />
              </div>
              <span className="countdown-text">Launching in {countdown}s</span>
            </>
          ) : (
            <>
              <Rocket className="launch-icon launching-icon" />
              <span className="launch-text launching-text">Launching...</span>
            </>
          )}
        </div>

        {/* Multiple progress rings */}
        {isActive && countdown !== null && countdown > 0 && (
          <>
            <div className="progress-ring ring-1">
              <svg className="progress-svg" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="progress-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#581c87" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="progress-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4c1d95" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#581c87" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <circle className="progress-circle-bg" cx="50" cy="50" r="45" />
                <circle
                  className="progress-circle"
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#progress-gradient-1)"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 45}`,
                    strokeDashoffset: `${2 * Math.PI * 45 * (1 - progress / 100)}`,
                  }}
                />
              </svg>
            </div>
            <div className="progress-ring ring-2">
              <svg className="progress-svg" viewBox="0 0 100 100">
                <circle className="progress-circle-bg" cx="50" cy="50" r="42" />
                <circle
                  className="progress-circle"
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#progress-gradient-2)"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 42}`,
                    strokeDashoffset: `${2 * Math.PI * 42 * (1 - progress / 100)}`,
                  }}
                />
              </svg>
            </div>
            <div className="progress-ring ring-3">
              <svg className="progress-svg" viewBox="0 0 100 100">
                <circle className="progress-circle-bg" cx="50" cy="50" r="39" />
                <circle
                  className="progress-circle"
                  cx="50"
                  cy="50"
                  r="39"
                  stroke="url(#progress-gradient-1)"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 39}`,
                    strokeDashoffset: `${2 * Math.PI * 39 * (1 - progress / 100)}`,
                  }}
                />
              </svg>
            </div>
          </>
        )}

        {/* Multiple particle systems */}
        {isActive && countdown !== null && countdown > 0 && (
          <>
            {/* Main particles */}
            <div className="particles particles-1" key={particleKey}>
              {[...Array(16)].map((_, i) => (
                <div key={i} className="particle particle-1" style={{ '--delay': `${i * 0.06}s` } as React.CSSProperties} />
              ))}
            </div>
            {/* Secondary particles */}
            <div className="particles particles-2" key={particleKey + 1000}>
              {[...Array(24)].map((_, i) => (
                <div key={i} className="particle particle-2" style={{ '--delay': `${i * 0.04}s` } as React.CSSProperties} />
              ))}
            </div>
            {/* Micro particles */}
            <div className="particles particles-3" key={particleKey + 2000}>
              {[...Array(32)].map((_, i) => (
                <div key={i} className="particle particle-3" style={{ '--delay': `${i * 0.03}s` } as React.CSSProperties} />
              ))}
            </div>
            {/* Lightning particles */}
            <div className="lightning-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="lightning" style={{ '--lightning-delay': `${i * 0.15}s` } as React.CSSProperties}></div>
              ))}
            </div>
          </>
        )}

        {/* Sound wave visualization */}
        {isActive && countdown !== null && countdown > 0 && (
          <div className="sound-waves">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="sound-wave" style={{ '--wave-delay': `${i * 0.1}s` } as React.CSSProperties}></div>
            ))}
          </div>
        )}

        {/* Glitch overlay */}
        {glitchActive && (
          <div className="glitch-overlay">
            <div className="glitch-line"></div>
            <div className="glitch-line"></div>
            <div className="glitch-line"></div>
          </div>
        )}
      </button>
    </div>
  )
}

