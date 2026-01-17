import { useState } from 'react'
import { CreditCard, User, Mail, Phone, FileText, X } from 'lucide-react'
import { api } from '../utils/api'
import { useToast } from '../utils/toast'
import Receipt from './Receipt'

interface PaymentFormProps {
  selectedService?: string
  selectedProduct?: string
  serviceType?: 'service' | 'product'
  onClose?: () => void
}

export default function PaymentForm({ selectedService, selectedProduct, serviceType = 'service', onClose }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    product: selectedProduct || '',
    amount: '',
    paymentMethod: 'card',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [receipt, setReceipt] = useState<any>(null)
  const { showToast, ToastComponent } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Create payment order
      const paymentData = {
        ...formData,
        amount: parseFloat(formData.amount),
      }

      const response = await api.post('/payments/create-order', paymentData) as { orderId?: string }
      
      // Generate receipt
      const receiptData = {
        transactionId: response.orderId || `TXN${Date.now()}`,
        amount: paymentData.amount,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        product: formData.product,
        serviceType: serviceType,
        paymentMethod: formData.paymentMethod,
        date: new Date().toISOString(),
        status: 'pending',
      }

      setReceipt(receiptData)
      showToast('Payment order created successfully! Receipt generated.', 'success')
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Payment processing failed. Please try again.'
      showToast(errorMessage, 'error')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (receipt) {
    return <Receipt receiptData={receipt} onClose={() => { setReceipt(null); onClose?.() }} />
  }

  return (
    <>
      {ToastComponent}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-purple-900/95 border-2 border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                Payment Form
              </h2>
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="+91 1234567890"
                />
              </div>

              {serviceType === 'service' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Service Selected
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    readOnly={!!selectedService}
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Service name"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Product Selected
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    readOnly={!!selectedProduct}
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Product name"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  Amount (₹)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  min="1"
                  step="0.01"
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Payment Method
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="upi">UPI</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="wallet">Wallet</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Payment'}
                </button>
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 bg-transparent text-white border border-purple-600/60 rounded-md hover:bg-purple-900/40 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
