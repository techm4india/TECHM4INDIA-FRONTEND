import { Rocket, Globe, Target } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import CTA from '../../components/CTA'
import { Link } from 'react-router-dom'

export default function TechM4SpaceAbout() {
  return (
    <div className="dark-bg-page">
      <div className="dark-bg-content">
        <Hero
          title="TechM4Space – India's First Experiential Space-Tech Platform"
          description="TechM4Space Technology is the space innovation wing of TechM4India. We provide hands-on programs in aerospace, satellite design, astronomy, and remote sensing, making India's youth space-ready."
        />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                While many courses teach space science theoretically, TechM4Space enables students to design, prototype, and compete globally. From rover challenges to satellite mini-projects, our students gain experience that aligns with ISRO, NASA, and global space-tech standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureCard
                icon={<Rocket className="w-8 h-8" />}
                title="Hands-On Programs"
                description="Real-world space-tech projects and competitions for practical experience."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
              <FeatureCard
                icon={<Globe className="w-8 h-8" />}
                title="Global Standards"
                description="Programs aligned with ISRO, NASA, and international space-tech standards."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
              <FeatureCard
                icon={<Target className="w-8 h-8" />}
                title="Career Pathways"
                description="Direct pathways to global space careers and aerospace opportunities."
                className="bg-purple-900/20 border-2 border-purple-500/30"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/divisions/space/programs"
                className="px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50"
              >
                View Programs
              </Link>
              <Link
                to="/divisions/space/benefits"
                className="px-6 py-3 bg-transparent text-white border-2 border-purple-600/60 rounded-md hover:bg-purple-900/40 hover:border-purple-500 font-medium"
              >
                See Benefits
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CTA
              primary={{ text: 'Join Our Space-Tech Programs', link: '/contact' }}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

