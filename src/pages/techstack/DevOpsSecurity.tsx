import { Shield, GitBranch, CheckCircle, Lock, Bug } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function DevOpsSecurity() {
  return (
    <>
      <Hero
        title="Security & Continuous Deployment You Can Trust"
        description="We follow enterprise-grade DevOps and security practices to ensure reliability."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GitBranch className="w-8 h-8" />}
              title="CI/CD Pipelines"
              description="Automated deployments with GitHub Actions. Streamlined development workflow."
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8" />}
              title="Code Quality"
              description="Checked using SonarQube. Maintain high code quality standards."
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8" />}
              title="Encryption"
              description="SSL/TLS across all platforms. End-to-end encryption for data security."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Access Control"
              description="IAM role-based policies. Granular access control and permissions."
            />
            <FeatureCard
              icon={<Bug className="w-8 h-8" />}
              title="Testing"
              description="Regular penetration testing & audits. Continuous security monitoring."
            />
          </div>
        </div>
      </section>
    </>
  )
}

