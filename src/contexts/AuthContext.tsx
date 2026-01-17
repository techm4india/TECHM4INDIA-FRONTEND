import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export interface User {
  id: string
  email: string
  name?: string
  roles?: string[]
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active sessions - try frontend first, then backend
    const checkSession = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          setLoading(false)
          return
        }

        // Check if it's frontend-only auth
        const storedUser = localStorage.getItem('user')
        if (storedUser && token === 'frontend-auth-token') {
          try {
            const user = JSON.parse(storedUser)
            setUser(user)
            setLoading(false)
            return
          } catch (e) {
            // Invalid stored user, try backend
          }
        }

        // Try backend authentication
        try {
          const response = await fetch(`${API_URL}/auth/me`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          })

          if (response.ok) {
            const data = await response.json()
            setUser(data.user)
          } else {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setUser(null)
          }
        } catch (error) {
          // Backend not available - check if we have frontend auth
          if (storedUser && token === 'frontend-auth-token') {
            try {
              const user = JSON.parse(storedUser)
              setUser(user)
            } catch (e) {
              setUser(null)
            }
          } else {
            setUser(null)
          }
        }
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const signIn = async (email: string, password: string) => {
    // Frontend-only authentication for default billing credentials
    const BILLING_EMAIL = 'jeevan@techm4india.com'
    const BILLING_PASSWORD = 'Jeevan@27'
    
    // Check if it's the billing credentials - allow frontend-only auth
    if (email.toLowerCase() === BILLING_EMAIL.toLowerCase() && password === BILLING_PASSWORD) {
      const frontendUser: User = {
        id: 'frontend-user-1',
        email: BILLING_EMAIL,
        name: 'Jeevan',
      }
      localStorage.setItem('token', 'frontend-auth-token')
      localStorage.setItem('user', JSON.stringify(frontendUser))
      setUser(frontendUser)
      return
    }
    
    // Try backend authentication for other users
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Login failed' }))
        throw new Error(error.message || 'Login failed')
      }

      const data = await response.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        setUser(data.user)
      }
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        // Backend not available - only allow billing credentials
        throw new Error('Backend API not available. Only authorized billing credentials are allowed for frontend-only access.')
      }
      throw error
    }
  }

  const signUp = async (email: string, password: string, name: string) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Registration failed')
    }

    const data = await response.json()
    if (data.token) {
      localStorage.setItem('token', data.token)
      setUser(data.user)
    }
  }

  const signOut = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token && token !== 'frontend-auth-token') {
        // Only call backend logout if it's not frontend auth
        try {
          await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          })
        } catch (error) {
          // Backend not available, continue with frontend logout
        }
      }
    } catch (error) {
      // Silently handle logout errors
    } finally {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

