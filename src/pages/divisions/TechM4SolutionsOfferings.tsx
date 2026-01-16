import { Database, BookOpen, BarChart3, Link2, FileCheck, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import PaymentForm from '../../components/PaymentForm'

export default function TechM4SolutionsOfferings() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>('')

  const handlePaymentClick = (productName: string) => {
    setSelectedProduct(productName)
    setShowPaymentForm(true)
  }

  const offerings = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'ERP Platforms',
      description: 'Streamline admissions, attendance, finance, exams, and all administrative processes in one unified platform.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'LMS (Learning Management Systems)',
      description: 'Deliver online classes, assignments, and assessments. Complete digital learning environment.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'AI Analytics Dashboards',
      description: 'Get real-time performance insights. Data-driven decision making for institutions.',
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: 'Salesforce & SAP Integration',
      description: 'Enterprise-grade connectivity. Seamless integration with existing enterprise tools.',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Compliance Tools',
      description: 'NAAC, NBA, AICTE-ready dashboards. Simplify audits and accreditation reporting.',
    },
  ]

  return (
    <>
      <Hero
        title="Education ERP & SaaS Solutions in India"
        description="Our offerings are tailored for K-12 schools, engineering colleges, and universities. Whether you're a CBSE school, a private university, or a skill development institute, our solutions scale with you."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <div key={offering.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="mb-4 inline-block p-3 rounded-lg text-primary-600 bg-primary-50">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{offering.title}</h3>
                <p className="text-gray-600 mb-4">{offering.description}</p>
                <button
                  onClick={() => handlePaymentClick(offering.title)}
                  className="w-full bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  Purchase Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPaymentForm && (
        <PaymentForm
          selectedProduct={selectedProduct}
          serviceType="product"
          onClose={() => setShowPaymentForm(false)}
        />
      )}
    </>
  )
}

