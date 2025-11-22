import { Zap, BookOpen, Users, Rocket, Globe, CheckCircle } from 'lucide-react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function WhyTechM4India() {
  return (
    <>
      <Hero
        title="Why Choose TechM4India?"
        description="We stand apart because of our ecosystem approach. Unlike training institutes that focus on one piece of the puzzle, we connect every stage of a student's journey."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Unique Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Cutting-Edge Technology"
              description="AI, IoT, Robotics, Space Research - we bring the latest technologies to students at every level."
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Learning Beyond Textbooks"
              description="Maker spaces, hackathons, projects - education that goes far beyond traditional classroom learning."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Skill Gap Bridging"
              description="Future-ready skills aligned with industries. We prepare students for real-world challenges."
            />
            <FeatureCard
              icon={<Rocket className="w-8 h-8" />}
              title="Unified Growth Journey"
              description="From K-12 innovation hubs to space-tech careers - a seamless pathway for every learner."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Exposure"
              description="Collaborations with ISRO, NASA forums, global startups - international opportunities for Indian students."
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8" />}
              title="Complete Ecosystem"
              description="Education doesn't stop at the classroom. It continues into innovation labs, industry projects, and space exploration."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The TechM4India Difference
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              With TechM4India, education doesn't stop at the classroom. It continues into innovation labs, 
              industry projects, enterprise solutions, and even space exploration. We provide a complete 
              journey that transforms students into innovators, researchers, and leaders.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

