import Hero from '../components/Hero'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <Hero
      title="India's First Experiential Learning Ecosystem"
      description="At TechM4India, we believe learning should never stop at theory. We are building a unified innovation journey where every student, from schools to engineering colleges, grows into a researcher, innovator, and leader."
      cta={
        <CTA
          primary={{ text: 'Explore Our Divisions', link: '/divisions' }}
          secondary={{ text: 'Partner With Us', link: '/contact' }}
        />
      }
    />
  )
}

