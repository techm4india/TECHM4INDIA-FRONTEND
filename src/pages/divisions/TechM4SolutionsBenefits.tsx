import { Zap, BarChart3, FileCheck, TrendingUp, User, BookOpen, CheckCircle } from 'lucide-react'
import Hero from '../../components/Hero'
import CTA from '../../components/CTA'

export default function TechM4SolutionsBenefits() {
  return (
    <>
      <Hero
        title="Why Institutions Choose TechM4Solutions"
        description="Our platforms don't just digitize – they transform. We provide comprehensive benefits for both institutions and students."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Institutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Zap className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
                <p className="text-gray-600">Automate routine tasks, save staff hours, and streamline operations.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <BarChart3 className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Decisions</h3>
                <p className="text-gray-600">Use AI analytics to track student outcomes and make data-driven decisions.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <FileCheck className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Simplify audits and accreditation reporting with built-in compliance tools.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <TrendingUp className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Cloud-first solutions built for growth, from small schools to large universities.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <User className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Learning</h3>
                <p className="text-gray-600">Personalized learning dashboards tailored to individual student needs.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <BookOpen className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Access</h3>
                <p className="text-gray-600">Easy access to online classes and assessments from anywhere.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <CheckCircle className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Evaluation</h3>
                <p className="text-gray-600">Transparent, tech-enabled evaluation and feedback systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTA
            primary={{ text: 'Get Started with TechM4Solutions', link: '/contact' }}
          />
        </div>
      </section>
    </>
  )
}

