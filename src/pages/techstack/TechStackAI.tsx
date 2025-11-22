import { Brain, FlaskConical, Search, TrendingUp } from 'lucide-react'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'

export default function TechStackAI() {
  return (
    <>
      <Hero
        title="Artificial Intelligence for Student Success"
        description="AI powers our most innovative products. From college prediction systems to plagiarism detection tools, AI is deeply embedded in our platform."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FlaskConical className="w-8 h-8" />}
              title="Flask/FastAPI APIs"
              description="Integrating ML into apps. Seamless AI model deployment and integration."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="TensorFlow & PyTorch"
              description="Advanced AI model training. State-of-the-art machine learning frameworks."
            />
            <FeatureCard
              icon={<Search className="w-8 h-8" />}
              title="NLP Transformers"
              description="For plagiarism removal and semantic search. Advanced natural language processing."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Predictive Analytics"
              description="Forecasting student performance and outcomes. Data-driven insights."
            />
          </div>
        </div>
      </section>
    </>
  )
}

