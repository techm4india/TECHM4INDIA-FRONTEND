import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1.5 rounded-lg font-bold text-xl inline-block mb-4">
              TechM4India
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              India's First Experiential Learning Ecosystem. Building a unified innovation journey 
              where every student grows into a researcher, innovator, and leader.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/techm4india"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/techm4india"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/techm4india"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/divisions" className="hover:text-primary-400 transition-colors">
                  Our Divisions
                </Link>
              </li>
              <li>
                <Link to="/programs-services" className="hover:text-primary-400 transition-colors">
                  Programs & Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Hyderabad, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+916301814246" className="text-sm hover:text-primary-400 transition-colors">
                  +91 6301814246
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:techm4india@gmail.com" className="text-sm hover:text-primary-400 transition-colors">
                  techm4india@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sm">www.techm4india.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechM4India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

