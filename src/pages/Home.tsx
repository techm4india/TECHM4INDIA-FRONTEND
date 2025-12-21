import { GraduationCap, Rocket, Lightbulb, Target, Users, BookOpen, Code, Globe, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CTA from '../components/CTA'
import FeatureCard from '../components/FeatureCard'
import LightPillar from '../components/LightPillar'
import './Home.css'

export default function Home() {
  return (
    <div className="unified-page-bg">
      <div className="unified-content-wrapper">
        {/* Hero Section with Light Pillar Background */}
        <div className="hero-section-with-pillar">
          {/* Light Pillar Effect - Behind Hero */}
          <div className="light-pillar-background">
            <LightPillar
              topColor="#5227FF"
              bottomColor="#FF9FFC"
              intensity={1.0}
              rotationSpeed={0.3}
              glowAmount={0.005}
              pillarWidth={3.0}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={0}
              interactive={false}
              mixBlendMode="normal"
            />
          </div>
          
          {/* Hero Content - On Top */}
          <Hero
            title="India's First Experiential Learning Ecosystem"
            description="At TechM4India, we believe learning should never stop at theory. We are building a unified innovation journey where every student, from schools to engineering colleges, grows into a researcher, innovator, and leader."
            cta={
              <CTA
                primary={{ text: 'Explore Our Divisions', link: '/divisions' }}
                secondary={{ text: 'Partner With Us', link: '/contact' }}
              />
            }
            className="hero-bg-unified"
          />
        </div>

        {/* What is TechM4India Section */}
        <section className="py-20 unified-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What is TechM4India?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              TechM4India is India's first unified experiential learning platform that connects every stage of a student's educational journey—from K-12 schools to engineering colleges to space research—creating a seamless path from learning to innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="professional-card-home glow-border-home">
              <div className="flex items-center mb-4 relative z-2">
                <div className="bg-purple-500/20 p-3 rounded-xl mr-4 professional-card-icon">
                  <Rocket className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed relative z-2">
                To transform India's education system by providing hands-on, real-world learning experiences that bridge the gap between theoretical knowledge and practical innovation. We empower students to become creators, not just consumers of knowledge.
              </p>
            </div>

            <div className="professional-card-home glow-border-home">
              <div className="flex items-center mb-4 relative z-2">
                <div className="bg-purple-500/20 p-3 rounded-xl mr-4 professional-card-icon">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed relative z-2">
                To make India the global hub for engineering innovation by 2037. We envision a future where every Indian student has access to world-class experiential learning facilities and opportunities to work on cutting-edge projects from an early age.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* What is Experiential Learning Section */}
        <section className="py-20 unified-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What is Experiential Learning?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experiential learning means learning by doing. Instead of just reading textbooks and taking exams, students work on real projects, solve actual problems, and create tangible solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Beyond Textbooks"
              description="Students learn through hands-on projects, maker spaces, hackathons, and real-world challenges instead of passive reading and memorization."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
            <FeatureCard
              icon={<Code className="w-8 h-8" />}
              title="Build Real Solutions"
              description="Create actual products, apps, robots, and innovations that solve real problems. Every project is a portfolio piece that showcases skills."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Collaboration"
              description="Work with international partners, participate in global competitions, and collaborate with students and experts from around the world."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

        {/* The Journey Section */}
        <section className="py-20 unified-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Complete Innovation Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a curious school student to a space researcher—one seamless path with no gaps.
            </p>
          </div>

          <div className="relative">
            {/* Journey Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/40">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">K-12 Schools</h3>
                <p className="text-gray-300">
                  Start with STEM labs, robotics, coding clubs, and maker spaces. Build curiosity and foundational skills.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/40">
                  <Lightbulb className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Engineering Colleges</h3>
                <p className="text-gray-300">
                  Advanced projects, internships, research opportunities, and industry collaborations. Turn ideas into innovations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/40">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Solutions & Research</h3>
                <p className="text-gray-300">
                  Work on enterprise solutions, cutting-edge research, and contribute to India's technological advancement.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/40">
                  <Rocket className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Space & Innovation</h3>
                <p className="text-gray-300">
                  Participate in space research, satellite projects, and become a global leader in innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/divisions"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl border-2 border-purple-400/50"
            >
              Explore All Divisions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

        {/* Key Benefits Section */}
        <section className="py-20 unified-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose TechM4India?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide everything students need to transform from learners to innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Unified Ecosystem"
              description="One platform connecting schools, colleges, research labs, and industry partners. No gaps in your learning journey."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Real-World Projects"
              description="Work on actual problems and create solutions that matter. Every project builds your portfolio and skills."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
            <FeatureCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Expert Mentorship"
              description="Learn from industry experts, researchers, and innovators who guide you through every step of your journey."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Opportunities"
              description="Participate in international competitions, collaborate with global partners, and access world-class resources."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Future-Ready Skills"
              description="Learn cutting-edge technologies like AI, robotics, space tech, and more—skills that employers actually want."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
            <FeatureCard
              icon={<Rocket className="w-8 h-8" />}
              title="Career Pathways"
              description="Clear pathways from student to researcher to innovator. Build a career doing what you love."
              className="bg-purple-900/20 border-2 border-purple-500/30 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

        {/* How It Works Section */}
        <section className="py-20 unified-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Does It Work?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start your innovation journey with TechM4India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border-2 border-purple-400/50">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Join a Division</h3>
              <p className="text-gray-300">
                Choose from TechM4Schools, TechM4Engineering, TechM4Solutions, or TechM4Space based on your level.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border-2 border-purple-400/50">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Access Resources</h3>
              <p className="text-gray-300">
                Get access to labs, maker spaces, online courses, project kits, and expert mentorship.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border-2 border-purple-400/50">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Build Projects</h3>
              <p className="text-gray-300">
                Work on real projects, participate in hackathons, and create solutions that solve actual problems.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border-2 border-purple-400/50">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Grow & Advance</h3>
              <p className="text-gray-300">
                Progress to advanced programs, research opportunities, and become an innovator and leader.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 unified-section cta-section-special">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Join thousands of students who are already building the future with TechM4India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/divisions"
                className="inline-flex items-center px-8 py-4 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-semibold text-lg border border-purple-700/50 hover:border-purple-600"
              >
                Explore Our Divisions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white border border-purple-600/60 rounded-md hover:bg-purple-900/40 hover:border-purple-500 font-semibold text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

