import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import BillingForm, { InvoiceData } from '../components/BillingForm'
import InvoiceDisplay from '../components/InvoiceDisplay'
import InvoiceList from '../components/InvoiceList'
import PageWrapper from '../components/PageWrapper'
import { invoiceStorage, StoredInvoice } from '../utils/invoiceStorage'
import { useAuth } from '../contexts/AuthContext'
import { hasBillingAccess } from '../utils/billingAccess'
import { Plus, Lock, LogIn } from 'lucide-react'

export default function Billing() {
  const navigate = useNavigate()
  const { user, isAuthenticated, loading } = useAuth()
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null)
  const [canEdit, setCanEdit] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [showListView, setShowListView] = useState(true)
  const [invoices, setInvoices] = useState<StoredInvoice[]>([])
  const [editingInvoiceId, setEditingInvoiceId] = useState<string | null>(null)

  useEffect(() => {
    const isDevMode = import.meta.env.DEV
    const hasDevAccess = isDevMode && localStorage.getItem('dev_billing_access') === 'jeevan@techm4india.com'
    
    if (!loading) {
      if (!hasDevAccess && (!isAuthenticated || !hasBillingAccess(user))) {
        // User doesn't have access, but don't redirect - show access denied
        return
      }
      loadInvoices()
    }
  }, [loading, isAuthenticated, user])

  // Development mode: Allow access with local storage check if backend is not available
  const isDevMode = import.meta.env.DEV
  const devBillingKey = 'dev_billing_access'
  
  // Check if user has dev access stored locally (for testing without backend)
  const hasDevAccess = isDevMode && localStorage.getItem(devBillingKey) === 'jeevan@techm4india.com'

  // Show access denied if user doesn't have billing access
  if (!loading && !hasDevAccess && (!isAuthenticated || !hasBillingAccess(user))) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-md w-full mx-auto px-4">
            <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-8 text-center">
              <div className="mb-6">
                <Lock className="w-16 h-16 text-purple-400 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Access Denied</h2>
              <p className="text-gray-300 mb-6">
                Billing system access is restricted to authorized personnel only.
              </p>
              {!isAuthenticated ? (
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm">
                    Please login with authorized credentials to access the billing system.
                  </p>
                  {isDevMode && (
                    <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                      <p className="text-yellow-300 text-xs mb-2">Development Mode:</p>
                      <button
                        onClick={() => {
                          localStorage.setItem(devBillingKey, 'jeevan@techm4india.com')
                          window.location.reload()
                        }}
                        className="text-xs text-yellow-300 hover:text-yellow-200 underline"
                      >
                        Enable Billing Access (Dev Only)
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors"
                  >
                    <LogIn className="w-5 h-5" />
                    Go to Login
                  </button>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">
                  Your account does not have permission to access this section.
                </p>
              )}
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }

  if (loading) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </PageWrapper>
    )
  }

  const loadInvoices = () => {
    setInvoices(invoiceStorage.getAll())
  }

  const handleGenerateInvoice = (data: InvoiceData) => {
    if (editingInvoiceId) {
      // Update existing invoice
      invoiceStorage.save(data, editingInvoiceId)
      setEditingInvoiceId(null)
    } else {
      // Create new invoice
      invoiceStorage.save(data)
    }
    
    setInvoiceData(data)
    setCanEdit(true)
    setIsEditing(false)
    setShowListView(false)
    loadInvoices()
  }

  const handleCloseInvoice = () => {
    setInvoiceData(null)
    setCanEdit(true)
    setIsEditing(false)
    setEditingInvoiceId(null)
    setShowListView(true)
  }

  const handleEditInvoice = () => {
    setIsEditing(true)
    setCanEdit(false)
    setShowListView(false)
  }

  const handleEditFromList = (invoice: StoredInvoice) => {
    setInvoiceData(invoice)
    setEditingInvoiceId(invoice.id)
    setIsEditing(true)
    setCanEdit(false)
    setShowListView(false)
  }

  const handleViewFromList = (invoice: StoredInvoice) => {
    setInvoiceData(invoice)
    setCanEdit(false)
    setIsEditing(false)
    setShowListView(false)
  }

  const handleDeleteInvoice = (id: string) => {
    invoiceStorage.delete(id)
    loadInvoices()
    if (invoiceData && (invoiceData as any).id === id) {
      handleCloseInvoice()
    }
  }

  const handleCreateNew = () => {
    setInvoiceData(null)
    setEditingInvoiceId(null)
    setIsEditing(true)
    setCanEdit(true)
    setShowListView(false)
  }

  return (
    <PageWrapper>
      <Hero
        title="Billing & Invoice System"
        description="Generate professional invoices and bills for your clients with our advanced billing system."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showListView ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Invoice Management</h2>
                <button
                  onClick={handleCreateNew}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Create New Invoice
                </button>
              </div>
              <InvoiceList
                invoices={invoices}
                onDelete={handleDeleteInvoice}
                onEdit={handleEditFromList}
                onView={handleViewFromList}
              />
            </div>
          ) : !invoiceData || isEditing ? (
            <div className="space-y-6">
              <button
                onClick={handleCloseInvoice}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium"
              >
                ← Back to List
              </button>
              <BillingForm 
                onGenerateInvoice={handleGenerateInvoice}
                initialData={invoiceData || undefined}
              />
            </div>
          ) : (
            <div className="space-y-6">
              <button
                onClick={handleCloseInvoice}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium"
              >
                ← Back to List
              </button>
              <InvoiceDisplay 
                invoiceData={invoiceData} 
                onClose={handleCloseInvoice}
                onEdit={handleEditInvoice}
                canEdit={canEdit}
              />
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}
