import { FlaskConical, Bot, Code2, Trophy, Users } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function TechM4SchoolsPrograms() {
  const programs = [
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'STEM Labs',
      description: 'Hands-on learning in science, technology, engineering, and math. Students engage with real experiments and projects.',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI & Robotics Clubs',
      description: 'Early exposure to future tech skills. Students learn to build and program robots, understand AI concepts.',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Coding Bootcamps',
      description: 'Practical programming from a young age. Age-appropriate coding challenges and projects.',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Innovation Challenges',
      description: 'Hackathons and competitions for creativity. Students solve real-world problems through innovation.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership & Life Skills',
      description: 'Workshops to build confidence and EQ. Develop communication, teamwork, and leadership abilities.',
    },
  ]

  return (
    <>
      <Hero
        title="Experiential Learning Programs for Schools"
        description="Our experiential programs are designed to blend technology with creativity, ensuring that every student is not just academically strong but also globally ready."
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

