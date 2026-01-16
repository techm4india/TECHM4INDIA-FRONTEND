import { User } from '../contexts/AuthContext'

const AUTHORIZED_BILLING_EMAIL = 'jeevan@techm4india.com'

export const hasBillingAccess = (user: User | null): boolean => {
  if (!user) {
    return false
  }
  
  // Check if user email matches authorized email (case-insensitive)
  return user.email.toLowerCase() === AUTHORIZED_BILLING_EMAIL.toLowerCase()
}

export const BILLING_AUTHORIZED_EMAIL = AUTHORIZED_BILLING_EMAIL
