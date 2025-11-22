import { Calendar, MapPin, TrendingUp, Rocket } from 'lucide-react'
import Hero from '../components/Hero'

export default function Roadmap() {
  const milestones = [
    {
      period: '2025–2027',
      title: 'National Expansion',
      description: 'Expand TechM4Schools & TechM4Engineering hubs nationwide.',
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      period: '2028–2030',
      title: 'Enterprise Scale',
      description: 'Deploy TechM4Solutions in 500+ institutions.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      period: '2031–2033',
      title: 'Global Expansion',
      description: 'Enter Southeast Asia & Middle East markets.',
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      period: '2034–2037',
      title: 'Innovation Leadership',
      description: 'Lead India in space-tech education & AI research.',
      icon: <Rocket className="w-8 h-8" />,
    },
  ]

  return (
    <>
      <Hero
        title="Vision 2037 – Making India the Innovation Hub"
        description="We are building toward a bold future. Our roadmap outlines the journey to make India the global hub for engineering innovation by 2037."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                    {milestone.icon}
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                        <span className="text-primary-600 font-semibold">{milestone.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-lg">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

