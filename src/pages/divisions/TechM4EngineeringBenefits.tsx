import { TrendingUp, Award, Lightbulb, Briefcase, Rocket, FileText, Globe } from 'lucide-react'
import Hero from '../../components/Hero'

export default function TechM4EngineeringBenefits() {
  return (
    <>
      <Hero
        title="Benefits of TechM4Engineering for Colleges & Students"
        description="TechM4Engineering bridges the gap between classroom learning and the demands of tomorrow's industries."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Colleges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <TrendingUp className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Placement Rates</h3>
                <p className="text-gray-600">Students graduate with real-world skills, leading to better job placements.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Award className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Improved Accreditation</h3>
                <p className="text-gray-600">Better NAAC/NBA scores with increased research output and innovation culture.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Lightbulb className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Culture</h3>
                <p className="text-gray-600">Stronger innovation & entrepreneurship culture across the campus.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Briefcase className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-World Experience</h3>
                <p className="text-gray-600">Real-world project experience that makes students industry-ready.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Globe className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Careers</h3>
                <p className="text-gray-600">Pathways to global careers through international collaborations.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Rocket className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Startup Support</h3>
                <p className="text-gray-600">Support for startups, patents, and research publications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

