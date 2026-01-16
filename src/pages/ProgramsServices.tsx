import { Link } from 'react-router-dom'
import { GraduationCap, Code, Rocket, Globe, ArrowRight, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Hero from '../components/Hero'
import PaymentForm from '../components/PaymentForm'

export default function ProgramsServices() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('')

  const handlePaymentClick = (serviceName: string) => {
    setSelectedService(serviceName)
    setShowPaymentForm(true)
  }

  return (
    <div className="dark-bg-page">
      <div className="dark-bg-content">
        <Hero
          title="TechM4India – Unified Innovation Ecosystem"
          description="Our unique strength is that we provide a complete journey. No other platform in India connects school education to space innovation in such a structured way."
        />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-purple-900/20 border-2 border-purple-500/30 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-10 h-10 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">TechM4Schools</h3>
                </div>
                <p className="text-gray-300 mb-4">Innovation labs, STEM education, coding bootcamps for schools.</p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to="/divisions/schools"
                    className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handlePaymentClick('TechM4Schools')}
                    className="inline-flex items-center px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 text-sm"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay Now
                  </button>
                </div>
              </div>

              <div className="bg-purple-900/20 border-2 border-purple-500/30 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Code className="w-10 h-10 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">TechM4Engineering</h3>
                </div>
                <p className="text-gray-300 mb-4">Research labs, internships, hackathons for engineering colleges.</p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to="/divisions/engineering"
                    className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handlePaymentClick('TechM4Engineering')}
                    className="inline-flex items-center px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 text-sm"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay Now
                  </button>
                </div>
              </div>

              <div className="bg-purple-900/20 border-2 border-purple-500/30 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Rocket className="w-10 h-10 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">TechM4Solutions</h3>
                </div>
                <p className="text-gray-300 mb-4">ERP, SaaS, and AI-powered digital platforms for institutions.</p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to="/divisions/solutions"
                    className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handlePaymentClick('TechM4Solutions')}
                    className="inline-flex items-center px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 text-sm"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay Now
                  </button>
                </div>
              </div>

              <div className="bg-purple-900/20 border-2 border-purple-500/30 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Globe className="w-10 h-10 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">TechM4Space</h3>
                </div>
                <p className="text-gray-300 mb-4">Global space-tech opportunities and aerospace careers.</p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to="/divisions/space"
                    className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handlePaymentClick('TechM4Space')}
                    className="inline-flex items-center px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 text-sm"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay Now
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Services by Institution Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  to="/services/schools"
                  className="bg-purple-900/20 border-2 border-purple-500/30 p-6 rounded-xl text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Services for Schools</h3>
                  <p className="text-gray-300">Transform schools with innovation programs</p>
                </Link>
                <Link
                  to="/services/colleges"
                  className="bg-purple-900/20 border-2 border-purple-500/30 p-6 rounded-xl text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Services for Colleges</h3>
                  <p className="text-gray-300">Future-ready services for colleges & universities</p>
                </Link>
                <Link
                  to="/services/enterprises"
                  className="bg-purple-900/20 border-2 border-purple-500/30 p-6 rounded-xl text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Services for Enterprises</h3>
                  <p className="text-gray-300">SaaS & cloud services for educational enterprises</p>
                </Link>
              </div>
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
      </div>
    </div>
  )
}

