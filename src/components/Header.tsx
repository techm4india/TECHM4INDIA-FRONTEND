import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(location.pathname.startsWith('/divisions'))
  const navigate = useNavigate()
  const { isAuthenticated, signOut, user } = useAuth()

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
    <header className="bg-white shadow-md sticky top-0 z-50 md:shadow-none md:border-r md:border-gray-200 md:fixed md:inset-y-0 md:left-0 md:w-64 md:z-50">
      <nav className="px-4 sm:px-6 lg:px-8 md:px-4 md:py-6 h-full flex flex-col">
        <div className="flex justify-between items-center h-16 md:h-auto md:flex-col md:items-start md:gap-6">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1.5 rounded-lg font-bold text-xl">
              TechM4India
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-col md:space-y-2 md:mt-8 flex-1">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Divisions collapsible */}
          <div className="px-3 py-2 rounded-lg">
            <button
              onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
              className={`flex items-center justify-between w-full text-sm font-medium transition-colors ${
                location.pathname.startsWith('/divisions') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              <span>Divisions</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDivisionsOpen && (
              <div className="mt-3 space-y-1 border-l border-gray-100 pl-3">
                {divisions.map((division) => (
                  <Link
                    key={division.path}
                    to={division.path}
                    className="block text-sm text-gray-600 hover:text-primary-600 py-1"
                  >
                    {division.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/programs-services"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/programs-services')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Programs & Services
          </Link>

          <Link
            to="/clients"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/clients')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Our Clients
          </Link>

          <Link
            to="/careers"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/careers')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/contact')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:block border-t border-gray-100 pt-6 mt-6">
          {isAuthenticated ? (
            <div className="space-y-3">
              <div className="text-sm text-gray-700">{user?.name || user?.email}</div>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center justify-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2 text-base font-medium text-gray-700">
                Divisions
              </div>
              {divisions.map((division) => (
                <Link
                  key={division.path}
                  to={division.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                >
                  {division.name}
                </Link>
              ))}

              <Link
                to="/programs-services"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/programs-services')
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Programs & Services
              </Link>

              <Link
                to="/clients"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/clients')
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Our Clients
              </Link>

              <Link
                to="/careers"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/careers')
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Careers
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/contact')
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>

              {isAuthenticated ? (
                <>
                  <div className="px-3 py-2 text-sm text-gray-700 border-t border-gray-200 mt-2">
                    {user?.name || user?.email}
                  </div>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="block w-full px-3 py-2 mt-2 bg-gray-600 text-white rounded-md text-center font-medium"
                  >
                    <LogOut className="w-4 h-4 inline mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 mt-2 bg-primary-600 text-white rounded-md text-center font-medium"
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

