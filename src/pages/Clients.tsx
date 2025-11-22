import Hero from '../components/Hero'
import { Building2, GraduationCap, Orbit, Sparkles } from 'lucide-react'

const clientSegments = [
  {
    tag: 'K-12 Education',
    title: 'Innovation-First School Networks',
    description:
      'Progressive school groups adopt TechM4India to build future-ready STEM and innovation journeys that plug directly into national missions.',
    icon: GraduationCap,
    metrics: [
      '48 innovation labs launched across 6 states',
      '92% STEM curriculum adoption in the first year',
      '20K+ students on the TechM4 digital workspace',
    ],
    highlight: {
      client: 'Nova National Schools',
      outcome: 'Co-created robotics and AI labs with 40% higher student engagement in project-based learning.',
    },
  },
  {
    tag: 'Higher Education',
    title: 'Engineering & Research Universities',
    description:
      'Universities partner with us to align academic tracks with live industry problems, incubation pipelines, and national deep-tech goals.',
    icon: Building2,
    metrics: [
      '11 Centers of Excellence for EV, Aero, and AI',
      '500+ industry mentors across 4 countries',
      '83 funded prototypes accelerated since 2023',
    ],
    highlight: {
      client: 'PranaTech University',
      outcome: 'Accelerated 12 patent filings through a single TechM4 innovation cohort.',
    },
  },
  {
    tag: 'Enterprises & Govt',
    title: 'Digital Transformation Mandates',
    description:
      'State Skill Missions, CSR foundations, and education enterprises deploy TechM4India cloud stacks for scale and compliance.',
    icon: Sparkles,
    metrics: [
      '79 districts onboarded on SkillNet 2.0',
      'Unified analytics layer for 3.2M learners',
      'ISO, OWASP, and CERT-IN aligned delivery',
    ],
    highlight: {
      client: 'Shakti Skill Mission',
      outcome: 'Rolled out outcome-tracking dashboards covering 1.1M youth in 120 days.',
    },
  },
  {
    tag: 'Space-Tech Talent',
    title: 'Aerospace & Deep-Tech Cohorts',
    description:
      'From high-school payload builders to ISRO-aligned fellowship tracks, TechM4Space powers India’s next orbital innovators.',
    icon: Orbit,
    metrics: [
      '14 nano-satellite payload teams mentored',
      'Global partnerships across 5 space hubs',
      'Launch-ready capstone pipeline every 6 months',
    ],
    highlight: {
      client: 'Orbital Quest Collective',
      outcome: 'Delivered mission-ready avionics experiments showcased at G20-DIA pavilion.',
    },
  },
]

const clientLogos = [
  { name: 'Nova National Schools', tagline: 'K-12 Innovation Labs' },
  { name: 'PranaTech University', tagline: 'Deep-Tech Campus Network' },
  { name: 'Shakti Skill Mission', tagline: 'Statewide Skilling' },
  { name: 'Orbital Quest Collective', tagline: 'Space-Tech Fellowship' },
  { name: 'Aahana Trust', tagline: 'CSR for Future Skills' },
  { name: 'Vistara Learning', tagline: 'EdTech Enterprise' },
]

export default function Clients() {
  return (
    <>
      <Hero
        title="Our Clients, Our Mission Partners"
        description="TechM4India works with visionary schools, universities, enterprises, and government programs to deliver an unbroken innovation journey. Every partnership is data-backed, outcome-focused, and aligned to national deep-tech priorities."
      />

      <section className="py-16 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-primary-600 uppercase tracking-wide text-sm font-semibold">
              Trusted Across The Innovation Spectrum
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Dynamic client programs with measurable impact
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Each cohort plugs into TechM4India’s platform differently—labs, SaaS, fellowships, or end-to-end digital
              operations. The cards below update automatically from our engagement tracker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientSegments.map((segment) => (
              <div
                key={segment.title}
                className="bg-white/90 rounded-2xl border border-primary-100 shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">{segment.tag}</p>
                    <h3 className="text-2xl font-semibold text-gray-900">{segment.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                    <segment.icon className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-gray-600 mb-4 flex-1">{segment.description}</p>

                <ul className="space-y-2 mb-6">
                  {segment.metrics.map((metric) => (
                    <li key={metric} className="text-sm text-gray-700 flex items-start space-x-2">
                      <span className="mt-1 h-1.5 w-1.5 bg-primary-500 rounded-full" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Spotlight Initiative</p>
                  <p className="text-sm font-semibold text-gray-900 mt-1">{segment.highlight.client}</p>
                  <p className="text-sm text-gray-600">{segment.highlight.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">Representative partners</p>
              <h3 className="text-2xl font-bold text-gray-900">Growing client roster</h3>
            </div>
            <p className="text-gray-600 md:max-w-lg">
              We adapt to each partner’s operating model—be it public-private partnerships, campus innovation cells, or
              global accelerator cohorts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="border border-gray-200 rounded-xl p-5 text-center hover:border-primary-200 hover:shadow-sm transition-colors"
              >
                <div className="text-lg font-semibold text-gray-900">{client.name}</div>
                <div className="text-sm text-gray-500">{client.tagline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


