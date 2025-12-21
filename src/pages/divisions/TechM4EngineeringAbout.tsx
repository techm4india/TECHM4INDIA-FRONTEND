import { Code, Target, Rocket } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import { Link } from 'react-router-dom'

export default function TechM4EngineeringAbout() {
  return (
    <div className="dark-bg-page">
      <div className="dark-bg-content">
        <Hero
          title="TechM4Engineering – Building Future Engineers"
          description="TechM4Engineering redefines higher education. We provide engineering students with real-world labs, AI-driven projects, and space-tech opportunities."
        />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Goal</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To close the skill gap between theory and practice, preparing engineers who are job-ready, research-ready, and startup-ready.
                </p>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-300">
                  To build a generation of engineers who not only graduate with degrees but also with publications, patents, and startups.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureCard
                icon={<Code className="w-8 h-8" />}
                title="Real-World Labs"
                description="Hands-on experience with AI, IoT, Robotics, and Cybersecurity labs."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
              <FeatureCard
                icon={<Rocket className="w-8 h-8" />}
                title="Industry Internships"
                description="Direct exposure to real problems and industry challenges."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
              <FeatureCard
                icon={<Target className="w-8 h-8" />}
                title="Research Support"
                description="Guidance for IEEE/Springer papers and research publications."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/divisions/engineering/programs"
                className="px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50"
              >
                View Programs
              </Link>
              <Link
                to="/divisions/engineering/benefits"
                className="px-6 py-3 bg-transparent text-white border-2 border-purple-600/60 rounded-md hover:bg-purple-900/40 hover:border-purple-500 font-medium"
              >
                See Benefits
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

