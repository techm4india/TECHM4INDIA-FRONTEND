import { Globe, Rocket, Briefcase, Trophy } from 'lucide-react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function GlobalPartnerships() {
  return (
    <>
      <Hero
        title="Global Collaborations for Indian Students"
        description="At TechM4India, borders don't limit innovation. Our international partnerships give Indian students opportunities to shine globally."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Rocket className="w-8 h-8" />}
              title="ISRO & NASA Forums"
              description="Research projects and design contests. Direct engagement with space agencies."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="International Startups"
              description="Collaboration with global innovators. Cross-border innovation opportunities."
            />
            <FeatureCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Student Internships Abroad"
              description="Exposure to top innovation hubs. International internship programs."
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title="Joint Hackathons"
              description="Cross-border competitions and challenges. Global innovation contests."
            />
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Global Exposure, Indian Roots
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              This ensures Indian students gain global exposure while staying rooted in India's innovation culture. 
              We bridge the gap between local talent and global opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

