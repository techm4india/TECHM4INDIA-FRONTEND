import { Database, BookOpen, BarChart3, Link2, FileCheck } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function TechM4SolutionsOfferings() {
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
              <FeatureCard
                key={offering.title}
                icon={offering.icon}
                title={offering.title}
                description={offering.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

