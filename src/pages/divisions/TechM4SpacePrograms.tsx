import { Satellite, Bot, Eye, Map, Globe } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function TechM4SpacePrograms() {
  const programs = [
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'Satellite Design Competitions',
      description: 'Hands-on design and testing. Students learn to design, build, and test satellite systems.',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Rover & Robotics Challenges',
      description: 'Build prototypes for exploration. Design and program rovers for space missions.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Astronomy Clubs',
      description: 'Study planetary systems and space science. Hands-on astronomy and astrophysics programs.',
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: 'Remote Sensing Labs',
      description: 'Work on Earth observation projects. Learn to analyze satellite imagery and data.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Collaborations',
      description: 'Engage with ISRO, NASA forums, and startups. International space-tech opportunities.',
    },
  ]

  return (
    <>
      <Hero
        title="Experiential Space-Tech Programs"
        description="TechM4Space offers structured, real-world programs. Students experience space engineering firsthand while preparing for global opportunities."
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

