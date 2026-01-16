import { FlaskConical, Briefcase, Rocket, Database, Award, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import PaymentForm from '../../components/PaymentForm'

export default function ServicesColleges() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('')

  const handlePaymentClick = (serviceName: string) => {
    setSelectedService(serviceName)
    setShowPaymentForm(true)
  }

  const services = [
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Research Labs',
      description: 'AI, IoT, Data Science, Cybersecurity labs with cutting-edge infrastructure and mentorship.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Industry Internships',
      description: 'Partnerships with enterprises for real-world industry exposure and internships.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Startup Support',
      description: 'Incubation and funding pathways. From idea to startup with full support.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'ERP & LMS Platforms',
      description: 'Academic and administrative management. Complete digital transformation.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Accreditation Support',
      description: 'NAAC/NBA/AICTE compliance dashboards. Simplify accreditation processes.',
    },
  ]

  return (
    <>
      <Hero
        title="Future-Ready Services for Colleges & Universities"
        description="Colleges gain a competitive edge with TechM4India's labs, SaaS platforms, and research support."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="mb-4 inline-block p-3 rounded-lg text-primary-600 bg-primary-50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => handlePaymentClick(service.title)}
                  className="w-full bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  Pay Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPaymentForm && (
        <PaymentForm
          selectedService={selectedService}
          serviceType="service"
          onClose={() => setShowPaymentForm(false)}
        />
      )}
    </>
  )
}

