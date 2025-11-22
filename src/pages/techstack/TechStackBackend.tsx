import { Server, Database, Key, CreditCard, TrendingUp } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function TechStackBackend() {
  return (
    <>
      <Hero
        title="Secure & Scalable Backend for Education Systems"
        description="The backend is the backbone of TechM4India. Our systems are robust, API-driven, and secure."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Server className="w-8 h-8" />}
              title="Node.js + Express.js"
              description="Lightweight and high-performance APIs. Fast, scalable server architecture."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="MongoDB + PostgreSQL"
              description="MongoDB for flexibility, PostgreSQL for structured data. Best of both worlds."
            />
            <FeatureCard
              icon={<Key className="w-8 h-8" />}
              title="JWT Authentication"
              description="JWT tokens and OTP verification. Secure authentication and authorization."
            />
            <FeatureCard
              icon={<CreditCard className="w-8 h-8" />}
              title="Razorpay Integration"
              description="Seamless payment processing. Secure payment gateway integration."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Scalability"
              description="Built for thousands of concurrent users. Enterprise-grade performance."
            />
          </div>
        </div>
      </section>
    </>
  )
}

