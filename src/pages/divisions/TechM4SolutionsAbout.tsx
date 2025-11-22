import { Cloud, Database, Target, ArrowRight } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import CTA from '../../components/CTA'
import { Link } from 'react-router-dom'

export default function TechM4SolutionsAbout() {
  return (
    <>
      <Hero
        title="TechM4Solutions – Smart SaaS & ERP for Education"
        description="TechM4Solutions is the enterprise solutions division of TechM4India. We provide ERP systems, SaaS platforms, AI dashboards, Salesforce/SAP integration, and custom software designed specifically for schools, colleges, and universities in India."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Education is changing rapidly, and institutions can no longer depend on outdated processes. From admissions to exams, finance to compliance, every aspect of academic administration must be digitally transformed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              TechM4Solutions is built to solve this challenge. With cloud-first architecture, we empower institutions to operate smarter, reduce manual effort, and improve student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud-First"
              description="Scalable cloud architecture built for growth and reliability."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="AI-Powered"
              description="Intelligent dashboards and analytics for data-driven decisions."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Compliance Ready"
              description="Built-in support for NAAC, NBA, AICTE accreditation requirements."
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/divisions/solutions/offerings"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium inline-flex items-center"
            >
              View Offerings <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/divisions/solutions/benefits"
              className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              See Benefits
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTA
            primary={{ text: 'Request a Demo', link: '/contact' }}
            secondary={{ text: 'Talk to Our Experts', link: '/contact' }}
          />
        </div>
      </section>
    </>
  )
}

