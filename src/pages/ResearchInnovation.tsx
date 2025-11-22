import { FileText, Rocket, Trophy, Lightbulb } from 'lucide-react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function ResearchInnovation() {
  return (
    <>
      <Hero
        title="Research, Innovation & Startup Ecosystem in India"
        description="TechM4India fosters a research-driven learning culture. Instead of students graduating with only theory, we enable them to leave with papers, patents, and prototypes."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="Research Publications"
              description="Support for IEEE, Springer, Scopus papers. Guidance through the entire publication process."
            />
            <FeatureCard
              icon={<Rocket className="w-8 h-8" />}
              title="Startup Incubation"
              description="From classroom ideas to funded startups. Complete incubation and mentorship support."
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title="Hackathons & Challenges"
              description="Industry-backed competitions. Real-world problem solving and innovation challenges."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Intellectual Property"
              description="Protecting ideas with patents. Support for patent filing and IP protection."
            />
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Connecting Innovation at Scale
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              We connect students, colleges, and enterprises in a way that makes innovation scalable and impactful. 
              Our ecosystem ensures that every innovation has the support it needs to grow from idea to impact.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

