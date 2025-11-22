import { Rocket, Globe, Target } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import CTA from '../../components/CTA'
import { Link } from 'react-router-dom'

export default function TechM4SpaceAbout() {
  return (
    <>
      <Hero
        title="TechM4Space – India's First Experiential Space-Tech Platform"
        description="TechM4Space Technology is the space innovation wing of TechM4India. We provide hands-on programs in aerospace, satellite design, astronomy, and remote sensing, making India's youth space-ready."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              While many courses teach space science theoretically, TechM4Space enables students to design, prototype, and compete globally. From rover challenges to satellite mini-projects, our students gain experience that aligns with ISRO, NASA, and global space-tech standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon={<Rocket className="w-8 h-8" />}
              title="Hands-On Programs"
              description="Real-world space-tech projects and competitions for practical experience."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Standards"
              description="Programs aligned with ISRO, NASA, and international space-tech standards."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Career Pathways"
              description="Direct pathways to global space careers and aerospace opportunities."
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/divisions/space/programs"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              View Programs
            </Link>
            <Link
              to="/divisions/space/benefits"
              className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              See Benefits
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTA
            primary={{ text: 'Join Our Space-Tech Programs', link: '/contact' }}
          />
        </div>
      </section>
    </>
  )
}

