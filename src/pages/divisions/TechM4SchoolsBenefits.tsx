import { Building2, GraduationCap, TrendingUp, Award, Lightbulb, Globe, Code2 } from 'lucide-react'
import Hero from '../../components/Hero'

export default function TechM4SchoolsBenefits() {
  return (
    <>
      <Hero
        title="Benefits of TechM4Schools for Institutions & Students"
        description="Partnering with TechM4Schools transforms institutions and students alike, creating future-ready learning environments."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Schools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Building2 className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stronger Admissions</h3>
                <p className="text-gray-600">Enhanced brand reputation and increased student enrollment through innovation programs.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Award className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Framework Alignment</h3>
                <p className="text-gray-600">Alignment with national and global education frameworks including NEP 2020.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Lightbulb className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Labs</h3>
                <p className="text-gray-600">State-of-the-art innovation labs that make schools stand out in the education sector.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Code2 className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Tech Exposure</h3>
                <p className="text-gray-600">Early exposure to coding, robotics, and AI from a young age.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Lightbulb className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Problem-Solving</h3>
                <p className="text-gray-600">Creativity and problem-solving skills beyond textbooks through hands-on projects.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Globe className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Opportunities</h3>
                <p className="text-gray-600">Leadership development for global opportunities and future careers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

