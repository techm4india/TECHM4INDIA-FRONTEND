import { GraduationCap, Sparkles, Target } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import { Link } from 'react-router-dom'

export default function TechM4SchoolsAbout() {
  return (
    <div className="dark-bg-page">
      <div className="dark-bg-content">
        <Hero
          title="TechM4Schools – Innovation-Driven Education"
          description="TechM4Schools transforms schools into innovation-driven campuses. We introduce children to the future of learning with STEM, AI, Robotics, Coding, and Life Skills programs."
        />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Unlike traditional classrooms, TechM4Schools focuses on hands-on projects, maker spaces, and innovation challenges. Our approach is aligned with NEP 2020 and global standards, making every student ready for the world stage.
                </p>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-300">
                  To make schools the first step of India's innovation ecosystem, nurturing creativity, leadership, and problem-solving.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureCard
                icon={<GraduationCap className="w-8 h-8" />}
                title="STEM Labs"
                description="Hands-on learning in science, technology, engineering, and math."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
              <FeatureCard
                icon={<Sparkles className="w-8 h-8" />}
                title="AI & Robotics"
                description="Early exposure to future tech skills through interactive clubs."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
              <FeatureCard
                icon={<Target className="w-8 h-8" />}
                title="Innovation Focus"
                description="Maker spaces and hackathons for creativity and problem-solving."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/divisions/schools/programs"
                className="px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50"
              >
                View Programs
              </Link>
              <Link
                to="/divisions/schools/benefits"
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

