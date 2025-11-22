import LiquidChrome from '../components/LiquidChrome'

export default function LiquidChromeDemo() {
  return (
    <div className="min-h-screen w-full">
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.2}
        amplitude={0.3}
        frequencyX={3}
        frequencyY={3}
        interactive={true}
        style={{ width: '100%', height: '100vh' }}
      />
    </div>
  )
}

