import { BookOpen, Users, Lightbulb, Trophy, Database, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Hero from '../../components/Hero'
import CTA from '../../components/CTA'
import PaymentForm from '../../components/PaymentForm'

export default function ServicesSchools() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('')

  const handlePaymentClick = (serviceName: string) => {
    setSelectedService(serviceName)
    setShowPaymentForm(true)
  }

  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Curriculum Integration',
      description: 'STEM, AI, and Robotics in school syllabus. Seamless integration with existing curriculum.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Teacher Training',
      description: 'Upskilling educators with digital tools and modern teaching methodologies.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation Labs',
      description: 'Maker spaces and robotics kits. Complete innovation infrastructure setup.',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Hackathons & Competitions',
      description: 'National and global participation. Organize and participate in innovation challenges.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'School ERP + LMS',
      description: 'Complete digital backbone for schools. Manage everything from admissions to assessments.',
    },
  ]

  return (
    <>
      <Hero
        title="Transforming Schools with Innovation Programs"
        description="We partner with schools to create future-ready campuses. Our comprehensive services transform schools into innovation-driven institutions."
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your School?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Partner with TechM4Schools and create an innovation-driven campus that prepares students for the future.
            </p>
            <CTA
              primary={{ text: 'Setup an Innovation Lab', link: '/contact' }}
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

