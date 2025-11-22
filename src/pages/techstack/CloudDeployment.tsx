import { Cloud, Server, Database, Box } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function CloudDeployment() {
  return (
    <>
      <Hero
        title="Cloud-First Deployment for Education SaaS"
        description="TechM4India uses AWS Cloud for fast, scalable, and secure deployments."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cloud className="w-8 h-8" />}
              title="AWS S3 + CloudFront"
              description="Reliable hosting and content delivery. Fast, global content distribution."
            />
            <FeatureCard
              icon={<Server className="w-8 h-8" />}
              title="AWS Cognito"
              description="Authentication & user management. Secure identity and access management."
            />
            <FeatureCard
              icon={<Server className="w-8 h-8" />}
              title="AWS EC2 & Lambda"
              description="Hybrid compute architecture. Scalable serverless and server-based computing."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="AWS RDS & DynamoDB"
              description="Flexible storage solutions. Managed databases for all use cases."
            />
            <FeatureCard
              icon={<Box className="w-8 h-8" />}
              title="Docker + Kubernetes"
              description="Containerized microservices. Scalable container orchestration."
            />
          </div>
        </div>
      </section>
    </>
  )
}

