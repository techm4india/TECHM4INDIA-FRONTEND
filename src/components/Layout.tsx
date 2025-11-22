import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const CHROMELESS_ROUTES = ['/', '/countdown']

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const hideChrome = CHROMELESS_ROUTES.includes(location.pathname)

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      {!hideChrome && <Header />}
      <main className={`flex-grow ${hideChrome ? '' : 'md:ml-64'} transition-all bg-transparent`}>{children}</main>
      {!hideChrome && (
        <div className="md:ml-64 bg-transparent">
          <Footer />
        </div>
      )}
    </div>
  )
}

