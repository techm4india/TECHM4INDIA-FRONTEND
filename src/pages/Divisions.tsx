import { Link } from 'react-router-dom'
import { GraduationCap, Code, Rocket, Globe, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'

export default function Divisions() {
  const divisions = [
    {
      name: 'TechM4Schools',
      icon: <GraduationCap className="w-12 h-12" />,
      description: 'Building experiential learning hubs in schools with STEM, AI, and Robotics.',
      link: '/divisions/schools',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'TechM4Engineering',
      icon: <Code className="w-12 h-12" />,
      description: 'Redefining engineering education with hands-on labs, internships, and research.',
      link: '/divisions/engineering',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'TechM4Solutions',
      icon: <Rocket className="w-12 h-12" />,
      description: 'Delivering SaaS, ERP, and AI enterprise solutions for schools and colleges.',
      link: '/divisions/solutions',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'TechM4Space Technology',
      icon: <Globe className="w-12 h-12" />,
      description: "Creating India's first experiential platform for space research and aerospace careers.",
      link: '/divisions/space',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <>
      <Hero
        title="Four Divisions, One Unified Platform"
        description="TechM4India is structured into four powerful divisions, each addressing a critical stage of the innovation journey. This structure ensures a seamless pathway for every learner, institution, and enterprise."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division) => (
              <Link
                key={division.name}
                to={division.link}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className={`bg-gradient-to-r ${division.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 rounded-lg p-3">
                      {division.icon}
                    </div>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{division.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-lg">{division.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

