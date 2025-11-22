import MagicBento from '../components/MagicBento'

export default function MagicBentoDemo() {
  return (
    <div className="min-h-screen py-12 flex items-center justify-center">
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
    </div>
  )
}

