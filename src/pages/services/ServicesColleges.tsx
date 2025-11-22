import { FlaskConical, Briefcase, Rocket, Database, Award } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function ServicesColleges() {
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
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

