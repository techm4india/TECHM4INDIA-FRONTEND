import { Code, Zap, Palette, Shield } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function TechStackFrontend() {
  return (
    <>
      <Hero
        title="Scalable & Modern Frontend for Education Platforms"
        description="Our frontend stack ensures speed, security, and usability. Students, teachers, and admins get a seamless, mobile-friendly digital experience."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FeatureCard
              icon={<Code className="w-8 h-8" />}
              title="React + TypeScript"
              description="Fast, modular, and future-proof. Type-safe development with modern React patterns."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Vite"
              description="Lightweight bundler for high performance. Fast development and optimized builds."
            />
            <FeatureCard
              icon={<Palette className="w-8 h-8" />}
              title="Tailwind CSS"
              description="Responsive and professional UI design. Utility-first CSS framework."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Role-Based Routing"
              description="Secure access with protected routes. Context providers for auth and app-wide states."
            />
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Context Providers: Auth, notifications, and app-wide states</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Mobile-friendly responsive design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Optimized performance and fast load times</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

