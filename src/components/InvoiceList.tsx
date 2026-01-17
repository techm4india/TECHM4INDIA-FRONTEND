import { useState } from 'react'
import { Trash2, Eye, Edit, FileText, Calendar, User, Search, Download } from 'lucide-react'
import { StoredInvoice } from '../utils/invoiceStorage'
import InvoiceDisplay from './InvoiceDisplay'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

interface InvoiceListProps {
  invoices: StoredInvoice[]
  onDelete: (id: string) => void
  onEdit: (invoice: StoredInvoice) => void
  onView: (invoice: StoredInvoice) => void
}

export default function InvoiceList({ invoices, onDelete, onView, onEdit }: InvoiceListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedInvoice, setSelectedInvoice] = useState<StoredInvoice | null>(null)
  const [showConfirmDelete, setShowConfirmDelete] = useState<string | null>(null)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  const calculateTotal = (invoice: StoredInvoice) => {
    const subtotal = invoice.items.reduce((sum, item) => sum + item.amount, 0)
    const discountAmount = (subtotal * invoice.discount) / 100
    const taxAmount = ((subtotal - discountAmount) * invoice.taxRate) / 100
    return subtotal - discountAmount + taxAmount
  }

  const filteredInvoices = invoices.filter((invoice) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      invoice.invoiceNumber.toLowerCase().includes(searchLower) ||
      invoice.billTo.name.toLowerCase().includes(searchLower) ||
      invoice.billTo.company.toLowerCase().includes(searchLower) ||
      invoice.billTo.email.toLowerCase().includes(searchLower)
    )
  })

  const handleDelete = (id: string) => {
    onDelete(id)
    setShowConfirmDelete(null)
  }

  const handleQuickDownload = (invoice: StoredInvoice) => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    let yPos = margin

    // Company Header
    doc.setFontSize(24)
    doc.setTextColor(88, 28, 135)
    doc.setFont('helvetica', 'bold')
    doc.text('TechM4India', margin, yPos)
    
    yPos += 8
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text('India\'s First Experiential Learning Ecosystem', margin, yPos)
    
    yPos += 5
    doc.setFontSize(9)
    doc.text('Hyderabad, India | +91 6301814246 | techm4india@gmail.com', margin, yPos)
    
    yPos += 15

    // Invoice Title
    doc.setFontSize(20)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('INVOICE', pageWidth - margin, yPos, { align: 'right' })
    
    yPos += 10

    // Invoice Details
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`Invoice Number: ${invoice.invoiceNumber}`, pageWidth - margin, yPos, { align: 'right' })
    yPos += 5
    doc.text(`Invoice Date: ${formatDate(invoice.invoiceDate)}`, pageWidth - margin, yPos, { align: 'right' })
    yPos += 5
    doc.text(`Due Date: ${formatDate(invoice.dueDate)}`, pageWidth - margin, yPos, { align: 'right' })
    
    yPos += 15

    // Bill To Section
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Bill To:', margin, yPos)
    yPos += 7
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(invoice.billTo.name, margin, yPos)
    yPos += 5
    
    if (invoice.billTo.company) {
      doc.text(invoice.billTo.company, margin, yPos)
      yPos += 5
    }
    
    doc.text(invoice.billTo.address, margin, yPos)
    yPos += 5
    doc.text(`${invoice.billTo.city}, ${invoice.billTo.state} ${invoice.billTo.zip}`, margin, yPos)
    yPos += 5
    doc.text(`Email: ${invoice.billTo.email}`, margin, yPos)
    yPos += 5
    doc.text(`Phone: ${invoice.billTo.phone}`, margin, yPos)
    
    if (invoice.billTo.gstin) {
      yPos += 5
      doc.text(`GSTIN: ${invoice.billTo.gstin}`, margin, yPos)
    }
    
    yPos += 15

    // Items Table
    const formatCurrencyForPDF = (amount: number) => {
      const parts = amount.toFixed(2).split('.')
      const integerPart = parts[0]
      const decimalPart = parts[1]
      let formatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return `Rs. ${formatted}.${decimalPart}`
    }

    // Recalculate amounts to ensure consistency
    const tableData = invoice.items.map((item, index) => {
      const itemAmount = Math.round((item.quantity * item.rate) * 100) / 100
      return [
        (index + 1).toString(),
        item.description,
        item.quantity.toString(),
        formatCurrencyForPDF(item.rate),
        formatCurrencyForPDF(itemAmount),
      ]
    })

    autoTable(doc, {
      startY: yPos,
      head: [['#', 'Description', 'Qty', 'Rate', 'Amount']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [88, 28, 135], textColor: 255, fontStyle: 'bold' },
      styles: { fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 15 },
        1: { cellWidth: 'auto' },
        2: { cellWidth: 25, halign: 'center' },
        3: { cellWidth: 35, halign: 'right' },
        4: { cellWidth: 35, halign: 'right' },
      },
      margin: { left: margin, right: margin },
    })

    const finalY = (doc as any).lastAutoTable.finalY + 10

    // Summary Section
    let summaryY = finalY
    const summaryX = pageWidth - margin - 70

    // Use consistent rounding to match display
    const subtotal = Math.round(invoice.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0) * 100) / 100
    const discountAmount = Math.round((subtotal * invoice.discount) / 100 * 100) / 100
    const taxAmount = Math.round(((subtotal - discountAmount) * invoice.taxRate) / 100 * 100) / 100
    const total = Math.round((subtotal - discountAmount + taxAmount) * 100) / 100

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('Subtotal:', summaryX, summaryY)
    doc.text(formatCurrencyForPDF(subtotal), pageWidth - margin, summaryY, { align: 'right' })
    summaryY += 6

    if (invoice.discount > 0) {
      doc.text(`Discount (${invoice.discount}%):`, summaryX, summaryY)
      doc.setTextColor(0, 150, 0)
      doc.text(`-${formatCurrencyForPDF(discountAmount)}`, pageWidth - margin, summaryY, { align: 'right' })
      doc.setTextColor(0, 0, 0)
      summaryY += 6
    }

    doc.text(`Tax (${invoice.taxRate}%):`, summaryX, summaryY)
    doc.text(formatCurrencyForPDF(taxAmount), pageWidth - margin, summaryY, { align: 'right' })
    summaryY += 8

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Total:', summaryX, summaryY)
    doc.text(formatCurrencyForPDF(total), pageWidth - margin, summaryY, { align: 'right' })

    doc.save(`Invoice-${invoice.invoiceNumber}.pdf`)
  }

  if (selectedInvoice) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedInvoice(null)}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium"
        >
          ← Back to List
        </button>
        <InvoiceDisplay 
          invoiceData={selectedInvoice} 
          onClose={() => setSelectedInvoice(null)}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by invoice number, client name, company, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
        />
      </div>

      {/* Invoice Count */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">
          All Invoices ({filteredInvoices.length})
        </h3>
      </div>

      {/* Invoice List */}
      {filteredInvoices.length === 0 ? (
        <div className="text-center py-12 bg-purple-900/20 border-2 border-purple-500/30 rounded-xl">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">
            {searchTerm ? 'No invoices found matching your search.' : 'No invoices yet. Create your first invoice!'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredInvoices.map((invoice) => (
            <div
              key={invoice.id}
              className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl p-6 hover:border-purple-400 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="text-xl font-bold text-white">{invoice.invoiceNumber}</h4>
                    <span className="px-3 py-1 bg-purple-800/50 text-purple-200 text-sm rounded-full">
                      {formatCurrency(calculateTotal(invoice))}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{invoice.billTo.name}</span>
                      {invoice.billTo.company && (
                        <span className="text-gray-500">• {invoice.billTo.company}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Created: {formatDate(invoice.createdAt)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuickDownload(invoice)}
                    className="p-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onView(invoice)}
                    className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    title="View Invoice"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onEdit(invoice)}
                    className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    title="Edit Invoice"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowConfirmDelete(invoice.id)}
                    className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    title="Delete Invoice"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-purple-900/95 border-2 border-purple-500/30 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Delete Invoice?</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this invoice? This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleDelete(showConfirmDelete)}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirmDelete(null)}
                className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
