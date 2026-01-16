import { useState } from 'react'
import { Plus, Trash2, FileText, Download } from 'lucide-react'
import { useToast } from '../utils/toast'

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

export interface InvoiceData {
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  billTo: {
    name: string
    company: string
    address: string
    city: string
    state: string
    zip: string
    email: string
    phone: string
    gstin?: string
  }
  items: InvoiceItem[]
  taxRate: number
  discount: number
  notes: string
  terms: string
}

interface BillingFormProps {
  onGenerateInvoice: (data: InvoiceData) => void
  initialData?: InvoiceData
}

export default function BillingForm({ onGenerateInvoice, initialData }: BillingFormProps) {
  const { showToast, ToastComponent } = useToast()
  
  const [formData, setFormData] = useState<InvoiceData>(initialData || {
    invoiceNumber: `INV-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`,
    invoiceDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    billTo: {
      name: '',
      company: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      phone: '',
      gstin: '',
    },
    items: [
      { id: '1', description: '', quantity: 1, rate: 0, amount: 0 }
    ],
    taxRate: 18,
    discount: 0,
    notes: '',
    terms: 'Payment due within 30 days of invoice date.',
  })

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0,
    }
    setFormData({
      ...formData,
      items: [...formData.items, newItem],
    })
  }

  const removeItem = (id: string) => {
    if (formData.items.length > 1) {
      setFormData({
        ...formData,
        items: formData.items.filter(item => item.id !== id),
      })
    } else {
      showToast('At least one item is required', 'error')
    }
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    const updatedItems = formData.items.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value }
        if (field === 'quantity' || field === 'rate') {
          updated.amount = updated.quantity * updated.rate
        }
        return updated
      }
      return item
    })
    setFormData({ ...formData, items: updatedItems })
  }

  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + item.amount, 0)
  }

  const calculateDiscountAmount = () => {
    const subtotal = calculateSubtotal()
    return (subtotal * formData.discount) / 100
  }

  const calculateTaxAmount = () => {
    const subtotal = calculateSubtotal()
    const discountAmount = calculateDiscountAmount()
    return ((subtotal - discountAmount) * formData.taxRate) / 100
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const discountAmount = calculateDiscountAmount()
    const taxAmount = calculateTaxAmount()
    return subtotal - discountAmount + taxAmount
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.billTo.name || !formData.billTo.email) {
      showToast('Please fill in all required client details', 'error')
      return
    }

    if (formData.items.some(item => !item.description || item.amount === 0)) {
      showToast('Please fill in all item details', 'error')
      return
    }

    onGenerateInvoice(formData)
    showToast('Invoice generated successfully!', 'success')
  }

  return (
    <>
      {ToastComponent}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Invoice Header */}
        <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Invoice Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Invoice Number *
              </label>
              <input
                type="text"
                value={formData.invoiceNumber}
                onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Invoice Date *
              </label>
              <input
                type="date"
                value={formData.invoiceDate}
                onChange={(e) => setFormData({ ...formData, invoiceDate: e.target.value })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Due Date *
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        {/* Bill To Section */}
        <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Bill To</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Client Name *
              </label>
              <input
                type="text"
                value={formData.billTo.name}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, name: e.target.value } })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.billTo.company}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, company: e.target.value } })}
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Company Name"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Address *
              </label>
              <input
                type="text"
                value={formData.billTo.address}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, address: e.target.value } })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Street Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                City *
              </label>
              <input
                type="text"
                value={formData.billTo.city}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, city: e.target.value } })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                State *
              </label>
              <input
                type="text"
                value={formData.billTo.state}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, state: e.target.value } })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="State"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                ZIP/PIN Code *
              </label>
              <input
                type="text"
                value={formData.billTo.zip}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, zip: e.target.value } })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="ZIP Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.billTo.email}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, email: e.target.value } })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="client@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                value={formData.billTo.phone}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, phone: e.target.value } })}
                required
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="+91 1234567890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                GSTIN (Optional)
              </label>
              <input
                type="text"
                value={formData.billTo.gstin || ''}
                onChange={(e) => setFormData({ ...formData, billTo: { ...formData.billTo, gstin: e.target.value } })}
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="GSTIN Number"
              />
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Items & Services</h3>
            <button
              type="button"
              onClick={addItem}
              className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 border border-purple-700/50"
            >
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          </div>

          <div className="space-y-4">
            {formData.items.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 items-start p-4 bg-purple-800/20 rounded-lg border border-purple-500/20">
                <div className="col-span-12 md:col-span-5">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description *
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Item or service description"
                  />
                </div>
                <div className="col-span-4 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                    required
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div className="col-span-4 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Rate (₹) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                    required
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div className="col-span-4 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={item.amount.toFixed(2)}
                    readOnly
                    className="w-full px-4 py-2 bg-purple-900/40 border border-purple-500/30 rounded-md text-white font-semibold"
                  />
                </div>
                <div className="col-span-12 md:col-span-1 flex items-end">
                  {formData.items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="w-full px-4 py-2 bg-red-800/50 text-white rounded-md hover:bg-red-700 border border-red-700/50"
                    >
                      <Trash2 className="w-4 h-4 mx-auto" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Pricing Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tax Rate (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={formData.taxRate}
                onChange={(e) => setFormData({ ...formData, taxRate: parseFloat(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Discount (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={formData.discount}
                onChange={(e) => setFormData({ ...formData, discount: parseFloat(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="bg-purple-800/30 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal:</span>
              <span className="font-semibold">₹{calculateSubtotal().toFixed(2)}</span>
            </div>
            {formData.discount > 0 && (
              <div className="flex justify-between text-gray-300">
                <span>Discount ({formData.discount}%):</span>
                <span className="font-semibold text-green-400">-₹{calculateDiscountAmount().toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-300">
              <span>Tax ({formData.taxRate}%):</span>
              <span className="font-semibold">₹{calculateTaxAmount().toFixed(2)}</span>
            </div>
            <div className="border-t border-purple-500/30 pt-2 flex justify-between text-white text-xl font-bold">
              <span>Total:</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
              placeholder="Additional notes or comments..."
            />
          </div>
          <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Payment Terms
            </label>
            <textarea
              value={formData.terms}
              onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
              placeholder="Payment terms and conditions..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors"
          >
            <Download className="w-5 h-5" />
            Generate Invoice & PDF
          </button>
        </div>
      </form>
    </>
  )
}
