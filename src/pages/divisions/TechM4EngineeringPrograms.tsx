import { FlaskConical, Briefcase, FileText, Rocket, Globe } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function TechM4EngineeringPrograms() {
  const programs = [
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Innovation Labs',
      description: 'AI, IoT, Robotics, Cybersecurity, Data Science labs with cutting-edge equipment and mentorship.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Industry-Driven Internships',
      description: 'Direct exposure to real problems. Partnerships with leading tech companies and startups.',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Research Publication Support',
      description: 'Guidance for IEEE/Springer papers. Support for research methodology, writing, and publication.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Hackathons & Startup Incubators',
      description: 'From prototype to product. Incubation support, mentorship, and funding pathways.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Opportunities',
      description: 'Internships and collaborations abroad. Exposure to international innovation hubs.',
    },
  ]

  return (
    <>
      <Hero
        title="Experiential Programs for Engineering Colleges"
        description="Through these programs, TechM4Engineering ensures students become industry leaders and innovators, not just job seekers."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <FeatureCard
                key={program.title}
                icon={program.icon}
                title={program.title}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

