import { Target, Eye, Users, TrendingUp } from 'lucide-react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function About() {
  return (
    <>
      <Hero
        title="About TechM4India – India's Innovation Ecosystem"
        description="TechM4India is not just another education company. We are India's first experiential learning platform with a vision to transform education into innovation."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border-2 border-primary-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-xl mr-4">
                  <Eye className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                To make India the global hub for engineering innovation by 2037.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 border-2 border-secondary-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-secondary-100 p-3 rounded-xl mr-4">
                  <Target className="w-8 h-8 text-secondary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                To build an ecosystem where every student graduates with practical skills, research publications, and startup potential.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We bring together schools, colleges, enterprises, and space research into a single ecosystem, ensuring every learner's journey is complete.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From STEM labs in schools to AI-powered enterprise solutions and finally to global space-tech opportunities, we provide a seamless growth pathway that no other platform offers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Unified Ecosystem"
              description="We connect every stage of a student's journey from K-12 to space-tech careers in one platform."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Experiential Learning"
              description="Beyond textbooks - maker spaces, hackathons, real-world projects, and global collaborations."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Future-Ready"
              description="Programs aligned with NEP 2020 and global standards, preparing students for tomorrow's challenges."
            />
          </div>
        </div>
      </section>
    </>
  )
}

