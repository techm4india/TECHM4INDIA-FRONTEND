import { Mail, Phone, MapPin, Send, Globe, Linkedin, Twitter, Instagram, Quote } from 'lucide-react'
import Hero from '../components/Hero'
import PageWrapper from '../components/PageWrapper'
import { useState } from 'react'
import { api } from '../utils/api'
import { useToast } from '../utils/toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast, ToastComponent } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await api.post('/contact', formData)
      showToast('Thank you for your message! We will get back to you soon.', 'success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      showToast(errorMessage, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    {
      question: 'Is TechM4India a training institute?',
      answer: 'No, we are a complete experiential ecosystem uniting schools, colleges, enterprises, and space-tech. We go beyond traditional training by providing hands-on projects, research opportunities, and real-world innovation experiences.',
    },
    {
      question: 'Who can partner with TechM4India?',
      answer: 'Schools, universities, enterprises, research organizations, and educational institutions looking to transform their learning approach. We welcome partnerships that align with our vision of experiential learning.',
    },
    {
      question: 'Do you provide ERP & SaaS solutions?',
      answer: 'Yes — through TechM4Solutions, we offer comprehensive ERP and SaaS solutions tailored for educational institutions and enterprises, helping them streamline operations and enhance efficiency.',
    },
    {
      question: 'How do students benefit from TechM4India?',
      answer: 'Students gain practical skills through hands-on projects, access to research opportunities, internships with industry partners, startup incubation support, and global collaboration opportunities. Every student builds a portfolio of real-world solutions.',
    },
    {
      question: 'What age groups do you serve?',
      answer: 'We serve students from K-12 schools through engineering colleges and beyond. Our ecosystem is designed to grow with students from their first STEM project to space research opportunities.',
    },
    {
      question: 'How does TechM4India differ from other educational platforms?',
      answer: 'We are India\'s first unified experiential learning ecosystem. Unlike platforms that focus on one aspect, we connect every stage—from school labs to enterprise solutions to space research—creating a seamless innovation journey.',
    },
    {
      question: 'Do you offer online or in-person programs?',
      answer: 'We offer both! Our programs include online courses, virtual labs, in-person maker spaces, hackathons, and hybrid learning experiences. We adapt to what works best for each student and institution.',
    },
    {
      question: 'Can students work on real industry projects?',
      answer: 'Absolutely! Through TechM4Solutions and our enterprise partnerships, students get opportunities to work on actual industry problems, build real solutions, and gain professional experience while learning.',
    },
    {
      question: 'What technologies do you focus on?',
      answer: 'We cover cutting-edge technologies including AI & Machine Learning, Robotics, IoT, Space Technology, Data Science, Computer Vision, and more. Our curriculum evolves with industry needs.',
    },
    {
      question: 'How can schools integrate TechM4India programs?',
      answer: 'Schools can integrate our STEM labs, maker spaces, project-based learning modules, and teacher training programs. We provide complete support including curriculum alignment, resources, and mentorship.',
    },
    {
      question: 'Do you provide certifications?',
      answer: 'Yes, students receive certificates for completed projects, courses, and programs. These certifications are recognized by our industry partners and add value to student portfolios.',
    },
    {
      question: 'What support do you provide for student startups?',
      answer: 'We offer startup incubation, mentorship from industry experts, access to funding networks, workspace facilities, and connections to investors. Our goal is to help students turn their innovations into successful ventures.',
    },
  ]

  const quotes = [
    {
      text: "Education is not the filling of a pail, but the lighting of a fire. At TechM4India, we ignite that fire through hands-on innovation.",
      author: "TechM4India Vision"
    },
    {
      text: "The future belongs to those who learn more skills and combine them in creative ways. We're building that future, one student at a time.",
      author: "Our Mission"
    },
    {
      text: "Innovation distinguishes between a leader and a follower. We're creating leaders who innovate, not just follow.",
      author: "TechM4India Philosophy"
    },
    {
      text: "The best way to predict the future is to create it. Our students don't just learn about technology—they create it.",
      author: "Our Approach"
    }
  ]

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <PageWrapper>
      {ToastComponent}
      <Hero
        title="Contact TechM4India – Let's Build the Future Together"
        description="Get in touch with us to learn more about our programs, partnerships, or career opportunities."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+916301814246" className="text-purple-400 hover:text-purple-300">
                      +91 6301814246
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:techm4india@gmail.com" className="text-purple-400 hover:text-purple-300">
                      techm4india@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Website</h3>
                    <a href="https://www.techm4india.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                      www.techm4india.com
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com/company/techm4india"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center border border-purple-500/30 transition-all hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-purple-300" />
                      </a>
                      <a
                        href="https://twitter.com/techm4india"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center border border-purple-500/30 transition-all hover:scale-110"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5 text-purple-300" />
                      </a>
                      <a
                        href="https://instagram.com/techm4india"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center border border-purple-500/30 transition-all hover:scale-110"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5 text-purple-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Words That Inspire Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-8 relative"
              >
                <Quote className="w-12 h-12 text-purple-400/30 absolute top-4 left-4" />
                <p className="text-lg text-gray-200 leading-relaxed mb-4 pl-8 italic">
                  "{quote.text}"
                </p>
                <p className="text-sm text-purple-400 font-semibold text-right">
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-purple-900/20 border-2 border-purple-500/30 rounded-lg overflow-hidden cursor-pointer transition-all hover:border-purple-400/50"
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <button className="flex-shrink-0 text-purple-400 hover:text-purple-300 text-2xl font-bold transition-transform">
                    {expandedFaq === index ? '−' : '+'}
                  </button>
                </div>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

