import { Download, X, CheckCircle } from 'lucide-react'
import { useRef } from 'react'

interface ReceiptProps {
  receiptData: {
    transactionId: string
    amount: number
    name: string
    email: string
    phone: string
    service?: string
    product?: string
    serviceType?: 'service' | 'product'
    paymentMethod: string
    date: string
    status: string
  }
  onClose?: () => void
}

export default function Receipt({ receiptData, onClose }: ReceiptProps) {
  const receiptRef = useRef<HTMLDivElement>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const downloadReceipt = () => {
    if (!receiptRef.current) return

    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const receiptHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Receipt - ${receiptData.transactionId}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              padding: 40px;
              background: #f5f5f5;
              color: #333;
            }
            .receipt-container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #9333ea;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #9333ea;
              font-size: 28px;
              margin-bottom: 10px;
            }
            .header p {
              color: #666;
              font-size: 14px;
            }
            .receipt-details {
              margin-bottom: 30px;
            }
            .detail-row {
              display: flex;
              justify-content: space-between;
              padding: 12px 0;
              border-bottom: 1px solid #eee;
            }
            .detail-label {
              font-weight: 600;
              color: #555;
            }
            .detail-value {
              color: #333;
            }
            .amount-section {
              background: #f9fafb;
              padding: 20px;
              border-radius: 8px;
              margin: 30px 0;
            }
            .amount-row {
              display: flex;
              justify-content: space-between;
              font-size: 20px;
              font-weight: bold;
              color: #9333ea;
            }
            .status {
              text-align: center;
              padding: 15px;
              background: #dcfce7;
              color: #166534;
              border-radius: 8px;
              font-weight: 600;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="header">
              <h1>TechM4India</h1>
              <p>Payment Receipt</p>
            </div>
            <div class="receipt-details">
              <div class="detail-row">
                <span class="detail-label">Transaction ID:</span>
                <span class="detail-value">${receiptData.transactionId}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date & Time:</span>
                <span class="detail-value">${formatDate(receiptData.date)}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Name:</span>
                <span class="detail-value">${receiptData.name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value">${receiptData.email}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${receiptData.phone}</span>
              </div>
              ${receiptData.service ? `
              <div class="detail-row">
                <span class="detail-label">Service:</span>
                <span class="detail-value">${receiptData.service}</span>
              </div>
              ` : ''}
              ${receiptData.product ? `
              <div class="detail-row">
                <span class="detail-label">Product:</span>
                <span class="detail-value">${receiptData.product}</span>
              </div>
              ` : ''}
              <div class="detail-row">
                <span class="detail-label">Payment Method:</span>
                <span class="detail-value">${receiptData.paymentMethod.toUpperCase()}</span>
              </div>
            </div>
            <div class="amount-section">
              <div class="amount-row">
                <span>Total Amount:</span>
                <span>₹${receiptData.amount.toFixed(2)}</span>
              </div>
            </div>
            <div class="status">
              Status: ${receiptData.status.toUpperCase()}
            </div>
            <div class="footer">
              <p>Thank you for your payment!</p>
              <p>This is a computer-generated receipt.</p>
              <p>For any queries, contact: techm4india@gmail.com</p>
            </div>
          </div>
        </body>
      </html>
    `

    printWindow.document.write(receiptHTML)
    printWindow.document.close()
    printWindow.print()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-purple-900/95 border-2 border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div ref={receiptRef} className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Payment Receipt
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

          <div className="bg-purple-800/30 rounded-xl p-6 mb-4">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">TechM4India</h3>
              <p className="text-gray-300">Payment Receipt</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2 border-b border-purple-500/30">
                <span className="text-gray-300 font-medium">Transaction ID:</span>
                <span className="text-white font-mono">{receiptData.transactionId}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-purple-500/30">
                <span className="text-gray-300 font-medium">Date & Time:</span>
                <span className="text-white">{formatDate(receiptData.date)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-purple-500/30">
                <span className="text-gray-300 font-medium">Name:</span>
                <span className="text-white">{receiptData.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-purple-500/30">
                <span className="text-gray-300 font-medium">Email:</span>
                <span className="text-white">{receiptData.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-purple-500/30">
                <span className="text-gray-300 font-medium">Phone:</span>
                <span className="text-white">{receiptData.phone}</span>
              </div>
              {receiptData.service && (
                <div className="flex justify-between py-2 border-b border-purple-500/30">
                  <span className="text-gray-300 font-medium">Service:</span>
                  <span className="text-white">{receiptData.service}</span>
                </div>
              )}
              {receiptData.product && (
                <div className="flex justify-between py-2 border-b border-purple-500/30">
                  <span className="text-gray-300 font-medium">Product:</span>
                  <span className="text-white">{receiptData.product}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b border-purple-500/30">
                <span className="text-gray-300 font-medium">Payment Method:</span>
                <span className="text-white uppercase">{receiptData.paymentMethod}</span>
              </div>
            </div>

            <div className="bg-purple-700/30 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-white">Total Amount:</span>
                <span className="text-2xl font-bold text-purple-300">₹{receiptData.amount.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">
                  Status: {receiptData.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={downloadReceipt}
                className="flex-1 bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Receipt
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-transparent text-white border border-purple-600/60 rounded-md hover:bg-purple-900/40 font-medium transition-colors"
                >
                  Close
                </button>
              )}
            </div>

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>Thank you for your payment!</p>
              <p className="mt-1">This is a computer-generated receipt.</p>
              <p className="mt-1">For any queries, contact: techm4india@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
