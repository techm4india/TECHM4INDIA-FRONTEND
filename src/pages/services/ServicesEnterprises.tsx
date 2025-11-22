import { Cloud, Link2, FileCheck, Shield } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import CTA from '../../components/CTA'

export default function ServicesEnterprises() {
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
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
            <CTA
              primary={{ text: 'Talk to Our Enterprise Team', link: '/contact' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

