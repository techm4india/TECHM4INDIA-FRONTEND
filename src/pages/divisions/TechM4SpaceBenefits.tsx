import { Rocket, Globe, Award, FileText, Lightbulb, Building2 } from 'lucide-react'
import Hero from '../../components/Hero'

export default function TechM4SpaceBenefits() {
  return (
    <>
      <Hero
        title="Why Choose TechM4Space?"
        description="TechM4Space provides unique benefits for both students and institutions, creating pathways to global space careers."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Rocket className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Space Careers</h3>
                <p className="text-gray-600">Direct pathway to global space careers through hands-on experience.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <Globe className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-On Prototypes</h3>
                <p className="text-gray-600">Exposure to hands-on prototypes and real space-tech projects.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <FileText className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Opportunities</h3>
                <p className="text-gray-600">Opportunities to publish, patent, and launch space-tech startups.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Institutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Award className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pioneer Recognition</h3>
                <p className="text-gray-600">Recognition as pioneers in space-tech education in India.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Lightbulb className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Reputation</h3>
                <p className="text-gray-600">Enhanced academic reputation with global space-tech collaborations.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-100">
                <Building2 className="w-10 h-10 text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Grants</h3>
                <p className="text-gray-600">Access to space-tech research grants and international networks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

