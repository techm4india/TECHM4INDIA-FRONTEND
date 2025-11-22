import { Link } from 'react-router-dom'
import { GraduationCap, Code, Rocket, Globe, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function ProgramsServices() {
  return (
    <>
      <Hero
        title="TechM4India – Unified Innovation Ecosystem"
        description="Our unique strength is that we provide a complete journey. No other platform in India connects school education to space innovation in such a structured way."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-10 h-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">TechM4Schools</h3>
              </div>
              <p className="text-gray-700 mb-4">Innovation labs, STEM education, coding bootcamps for schools.</p>
              <Link
                to="/divisions/schools"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100">
              <div className="flex items-center mb-4">
                <Code className="w-10 h-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">TechM4Engineering</h3>
              </div>
              <p className="text-gray-700 mb-4">Research labs, internships, hackathons for engineering colleges.</p>
              <Link
                to="/divisions/engineering"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100">
              <div className="flex items-center mb-4">
                <Rocket className="w-10 h-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">TechM4Solutions</h3>
              </div>
              <p className="text-gray-700 mb-4">ERP, SaaS, and AI-powered digital platforms for institutions.</p>
              <Link
                to="/divisions/solutions"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100">
              <div className="flex items-center mb-4">
                <Globe className="w-10 h-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">TechM4Space</h3>
              </div>
              <p className="text-gray-700 mb-4">Global space-tech opportunities and aerospace careers.</p>
              <Link
                to="/divisions/space"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Services by Institution Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/services/schools"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Services for Schools</h3>
                <p className="text-gray-600">Transform schools with innovation programs</p>
              </Link>
              <Link
                to="/services/colleges"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Services for Colleges</h3>
                <p className="text-gray-600">Future-ready services for colleges & universities</p>
              </Link>
              <Link
                to="/services/enterprises"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Services for Enterprises</h3>
                <p className="text-gray-600">SaaS & cloud services for educational enterprises</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

