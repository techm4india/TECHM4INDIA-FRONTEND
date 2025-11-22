import { Briefcase, Code, GraduationCap, TrendingUp, Users, Zap, Rocket, Globe, Target } from 'lucide-react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'

export default function Careers() {
  const roles = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Engineering',
      description: 'AI, ML, SaaS developers. Build cutting-edge solutions for education.',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education',
      description: 'Trainers, curriculum designers. Shape the future of learning.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Business',
      description: 'Sales, partnerships, strategy. Drive growth and impact.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Internships',
      description: 'Hybrid roles with stipends & growth to 5 LPA+. Start your career journey.',
    },
  ]

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Hybrid Culture',
      description: 'Flexibility with hybrid work culture. Work-life balance.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Early Startup Exposure',
      description: 'Be part of India\'s innovation journey from the ground up.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Projects',
      description: 'Access to global projects and international collaborations.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Impact',
      description: 'A chance to contribute to India\'s innovation transformation.',
    },
  ]

  return (
    <>
      <Hero
        title="Careers at TechM4India – Build the Future"
        description="We're not offering jobs — we're offering missions. Join us to shape the future of education, SaaS, and space technology."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Roles We Hire For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {roles.map((role) => (
              <FeatureCard
                key={role.title}
                icon={role.icon}
                title={role.title}
                description={role.description}
              />
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Send your resume to techm4india@gmail.com or reach out through our contact page.
          </p>
          <CTA
            primary={{ text: 'Contact Us', link: '/contact' }}
          />
        </div>
      </section>
    </>
  )
}

