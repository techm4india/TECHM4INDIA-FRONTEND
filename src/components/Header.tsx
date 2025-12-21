import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, LogOut, Rocket } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const { isAuthenticated, signOut, user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (error) {
      // Silently handle logout errors
    }
  }

  const isActive = (path: string) => location.pathname === path

  const navigation = [
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about' },
    { name: 'Why TechM4India', path: '/why-techm4india' },
  ]

  const divisions = [
    { name: 'TechM4Schools', path: '/divisions/schools' },
    { name: 'TechM4Engineering', path: '/divisions/engineering' },
    { name: 'TechM4Solutions', path: '/divisions/solutions' },
    { name: 'TechM4Space', path: '/divisions/space' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-purple-950/90 border-b border-purple-500/30'
          : 'bg-purple-950/70'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center space-x-2 group relative z-10"
          >
            <div className="bg-purple-800 text-white px-4 py-2 rounded-md font-bold text-lg md:text-xl border border-purple-700/50 hover:bg-purple-700 transition-colors duration-200">
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5 md:w-6 md:h-6" />
                <span>TechM4India</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDivisionsOpen(true)}
              onMouseLeave={() => setIsDivisionsOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium ${
                  location.pathname.startsWith('/divisions')
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>Divisions</span>
                <ChevronDown
                  className={`w-4 h-4 ${
                    isDivisionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isDivisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-purple-950/95 rounded-xl border border-purple-500/40 overflow-hidden">
                  <div className="py-2">
                    {divisions.map((division) => (
                      <Link
                        key={division.path}
                        to={division.path}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20"
                      >
                        {division.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/programs-services"
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                isActive('/programs-services')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Programs & Services
            </Link>

            <Link
              to="/clients"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/clients')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Our Clients
            </Link>

            <Link
              to="/careers"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/careers')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>

            {/* Auth Button */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-purple-500/30">
                <span className="text-sm text-gray-300">{user?.name || user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg text-sm font-medium flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="ml-4 px-6 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 text-sm font-medium border border-purple-700/50 hover:border-purple-600"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-purple-500/30 bg-purple-950/50">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-purple-500/30 text-white border-l-4 border-purple-400'
                      : 'text-gray-300 hover:bg-purple-500/20 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-3">
                <button
                  onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-300 hover:text-white"
                >
                  <span>Divisions</span>
                  <ChevronDown
                    className={`w-4 h-4 ${
                      isDivisionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isDivisionsOpen && (
                  <div className="mt-2 space-y-1 pl-4 border-l-2 border-purple-500/30">
                    {divisions.map((division) => (
                      <Link
                        key={division.path}
                        to={division.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-gray-400 hover:text-white"
                      >
                        {division.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/programs-services"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/programs-services')
                    ? 'bg-purple-500/30 text-white border-l-4 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'text-gray-300 hover:bg-purple-500/20 hover:text-white'
                }`}
              >
                Programs & Services
              </Link>

              <Link
                to="/clients"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/clients')
                    ? 'bg-purple-500/30 text-white border-l-4 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'text-gray-300 hover:bg-purple-500/20 hover:text-white'
                }`}
              >
                Our Clients
              </Link>

              <Link
                to="/careers"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/careers')
                    ? 'bg-purple-500/30 text-white border-l-4 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'text-gray-300 hover:bg-purple-500/20 hover:text-white'
                }`}
              >
                Careers
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/contact')
                    ? 'bg-purple-500/30 text-white border-l-4 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'text-gray-300 hover:bg-purple-500/20 hover:text-white'
                }`}
              >
                Contact
              </Link>

              {isAuthenticated ? (
                <div className="pt-4 mt-4 border-t border-purple-500/30 px-4">
                  <div className="text-sm text-gray-300 mb-3">{user?.name || user?.email}</div>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 text-sm font-medium flex items-center justify-center space-x-2 border border-purple-700/50 hover:border-purple-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-3 bg-purple-800 text-white rounded-md text-center font-medium border border-purple-700/50 hover:bg-purple-700 hover:border-purple-600 transition-colors duration-200"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
