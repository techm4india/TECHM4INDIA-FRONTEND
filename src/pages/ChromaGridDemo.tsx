import ChromaGrid from '../components/ChromaGrid'

export default function ChromaGridDemo() {
  return (
    <div className="min-h-screen py-12 flex items-center justify-center bg-gray-900">
      <ChromaGrid
        radius={300}
        columns={3}
        rows={2}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  )
}

