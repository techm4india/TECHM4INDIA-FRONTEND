import { InvoiceData } from '../components/BillingForm'

const STORAGE_KEY = 'techm4india_invoices'

export interface StoredInvoice extends InvoiceData {
  id: string
  createdAt: string
  updatedAt: string
}

export const invoiceStorage = {
  // Get all invoices
  getAll(): StoredInvoice[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Error reading invoices from storage:', error)
      return []
    }
  },

  // Get invoice by ID
  getById(id: string): StoredInvoice | null {
    const invoices = this.getAll()
    return invoices.find(inv => inv.id === id) || null
  },

  // Save invoice (create or update)
  save(invoice: InvoiceData, id?: string): StoredInvoice {
    const invoices = this.getAll()
    const now = new Date().toISOString()
    
    if (id) {
      // Update existing invoice
      const index = invoices.findIndex(inv => inv.id === id)
      if (index !== -1) {
        invoices[index] = {
          ...invoice,
          id,
          createdAt: invoices[index].createdAt,
          updatedAt: now,
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices))
        return invoices[index]
      }
    }
    
    // Create new invoice
    const newInvoice: StoredInvoice = {
      ...invoice,
      id: id || `inv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: now,
      updatedAt: now,
    }
    
    invoices.push(newInvoice)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices))
    return newInvoice
  },

  // Delete invoice
  delete(id: string): boolean {
    try {
      const invoices = this.getAll()
      const filtered = invoices.filter(inv => inv.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
      return filtered.length < invoices.length
    } catch (error) {
      console.error('Error deleting invoice:', error)
      return false
    }
  },

  // Get invoice count
  count(): number {
    return this.getAll().length
  },
}
