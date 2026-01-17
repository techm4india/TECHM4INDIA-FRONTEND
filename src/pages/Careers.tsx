import { Code, Zap, Rocket, Globe, Target, Brain, Layers, Cpu, Palette, FlaskConical, UserPlus, Megaphone, UserCheck, Briefcase } from 'lucide-react'
import { useState } from 'react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'
import JobApplicationForm from '../components/JobApplicationForm'

export default function Careers() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string>('')

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle)
    setShowApplicationForm(true)
  }

  const roles = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Engineer',
      description: 'Develop AI/ML solutions for education platforms. Build intelligent systems that transform learning experiences.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Developer',
      description: 'Build end-to-end SaaS solutions. Work with modern tech stacks to create scalable educational platforms.',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Product Development Engineer',
      description: 'Design and develop innovative products. Transform ideas into impactful solutions for education and innovation.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IoT & Robotics Engineer',
      description: 'Create smart IoT solutions and robotics systems. Build hands-on learning experiences for STEM education.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Designer',
      description: 'Design intuitive interfaces for educational platforms. Create user experiences that inspire learning and innovation.',
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'R&D Engineer (Innovation Lab)',
      description: 'Drive research and innovation. Work on cutting-edge projects in space tech, AI, and educational technology.',
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Client Acquisition Manager',
      description: 'Build partnerships with schools, colleges, and enterprises. Expand TechM4India\'s reach across India.',
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Marketing Manager',
      description: 'Shape our brand and growth strategy. Market India\'s first unified innovation ecosystem to the world.',
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Client Relationship Manager',
      description: 'Nurture partnerships and ensure client success. Build lasting relationships with educational institutions.',
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
    <div className="dark-bg-page">
      <div className="dark-bg-content">
      <Hero
        title="Careers at TechM4India – Build the Future"
        description="We're not offering jobs — we're offering missions. Join us to shape the future of education, SaaS, and space technology."
      />

        <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Roles We Hire For
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {roles.map((role) => (
                <div key={role.title} className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6">
                  <div className="mb-4 inline-block p-3 rounded-lg text-purple-400 bg-purple-500/20">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{role.title}</h3>
                  <p className="text-gray-300 mb-4">{role.description}</p>
                  <button
                    onClick={() => handleApplyClick(role.title)}
                    className="w-full bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Briefcase className="w-4 h-4" />
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Work With Us?
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                  className="bg-purple-900/20 border-2 border-purple-500/30"
              />
            ))}
          </div>
        </div>
      </section>

        <section className="py-16 bg-purple-800/50 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className="text-xl mb-8 text-gray-300">
            Send your resume to techm4india@gmail.com or reach out through our contact page.
          </p>
          <CTA
            primary={{ text: 'Contact Us', link: '/contact' }}
          />
        </div>
        </section>

        {showApplicationForm && (
          <JobApplicationForm
            selectedRole={selectedRole}
            onClose={() => setShowApplicationForm(false)}
          />
        )}
      </div>
    </div>
  )
}

