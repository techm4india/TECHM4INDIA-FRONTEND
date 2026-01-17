import { Cloud, Link2, FileCheck, Shield, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Hero from '../../components/Hero'
import CTA from '../../components/CTA'
import PaymentForm from '../../components/PaymentForm'

export default function ServicesEnterprises() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('')

  const handlePaymentClick = (serviceName: string) => {
    setSelectedService(serviceName)
    setShowPaymentForm(true)
  }

  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Custom SaaS Platforms',
      description: 'Built for unique needs. Tailored solutions for large education groups and universities.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Deployment',
      description: 'AWS-based scalable infrastructure. Enterprise-grade cloud solutions.',
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: 'Salesforce/SAP Integration',
      description: 'Seamless enterprise tools integration. Connect with existing enterprise systems.',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Compliance Systems',
      description: 'Built-in NAAC/NBA dashboards. Automated compliance and reporting.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security and reliability. Trusted by leading institutions.',
    },
  ]

  return (
    <>
      <Hero
        title="SaaS & Cloud Services for Educational Enterprises"
        description="TechM4Solutions delivers enterprise-grade digital transformation to large education groups and universities. Enterprises choose us for our reliability, scalability, and security."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
            <CTA
              primary={{ text: 'Talk to Our Enterprise Team', link: '/contact' }}
            />
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

