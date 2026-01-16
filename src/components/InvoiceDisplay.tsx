import { InvoiceData } from './BillingForm'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Download, Printer } from 'lucide-react'

interface InvoiceDisplayProps {
  invoiceData: InvoiceData
  onClose?: () => void
  onEdit?: () => void
  canEdit?: boolean
}

export default function InvoiceDisplay({ invoiceData, onClose, onEdit, canEdit = false }: InvoiceDisplayProps) {
  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.amount, 0)
  }

  const calculateDiscountAmount = () => {
    const subtotal = calculateSubtotal()
    return (subtotal * invoiceData.discount) / 100
  }

  const calculateTaxAmount = () => {
    const subtotal = calculateSubtotal()
    const discountAmount = calculateDiscountAmount()
    return ((subtotal - discountAmount) * invoiceData.taxRate) / 100
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const discountAmount = calculateDiscountAmount()
    const taxAmount = calculateTaxAmount()
    return subtotal - discountAmount + taxAmount
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  // Format currency for PDF (without special characters that cause encoding issues)
  const formatCurrencyForPDF = (amount: number) => {
    // Format as: 1,30,000.00 (simple comma formatting)
    const parts = amount.toFixed(2).split('.')
    const integerPart = parts[0]
    const decimalPart = parts[1]
    
    // Add comma separators for thousands
    let formatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    
    // Use simple text format that PDF can handle
    return `Rs. ${formatted}.${decimalPart}`
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    let yPos = margin

    // Company Header
    doc.setFontSize(24)
    doc.setTextColor(88, 28, 135) // Purple color
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
    doc.text(`Invoice Number: ${invoiceData.invoiceNumber}`, pageWidth - margin, yPos, { align: 'right' })
    yPos += 5
    doc.text(`Invoice Date: ${formatDate(invoiceData.invoiceDate)}`, pageWidth - margin, yPos, { align: 'right' })
    yPos += 5
    doc.text(`Due Date: ${formatDate(invoiceData.dueDate)}`, pageWidth - margin, yPos, { align: 'right' })
    
    yPos += 15

    // Bill To Section
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Bill To:', margin, yPos)
    yPos += 7
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(invoiceData.billTo.name, margin, yPos)
    yPos += 5
    
    if (invoiceData.billTo.company) {
      doc.text(invoiceData.billTo.company, margin, yPos)
      yPos += 5
    }
    
    doc.text(invoiceData.billTo.address, margin, yPos)
    yPos += 5
    doc.text(`${invoiceData.billTo.city}, ${invoiceData.billTo.state} ${invoiceData.billTo.zip}`, margin, yPos)
    yPos += 5
    doc.text(`Email: ${invoiceData.billTo.email}`, margin, yPos)
    yPos += 5
    doc.text(`Phone: ${invoiceData.billTo.phone}`, margin, yPos)
    
    if (invoiceData.billTo.gstin) {
      yPos += 5
      doc.text(`GSTIN: ${invoiceData.billTo.gstin}`, margin, yPos)
    }
    
    yPos += 15

    // Items Table - Use simple number formatting for PDF
    const tableData = invoiceData.items.map((item, index) => [
      (index + 1).toString(),
      item.description,
      item.quantity.toString(),
      formatCurrencyForPDF(item.rate),
      formatCurrencyForPDF(item.amount),
    ])

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

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('Subtotal:', summaryX, summaryY)
    doc.text(formatCurrencyForPDF(calculateSubtotal()), pageWidth - margin, summaryY, { align: 'right' })
    summaryY += 6

    if (invoiceData.discount > 0) {
      doc.text(`Discount (${invoiceData.discount}%):`, summaryX, summaryY)
      doc.setTextColor(0, 150, 0)
      doc.text(`-${formatCurrencyForPDF(calculateDiscountAmount())}`, pageWidth - margin, summaryY, { align: 'right' })
      doc.setTextColor(0, 0, 0)
      summaryY += 6
    }

    doc.text(`Tax (${invoiceData.taxRate}%):`, summaryX, summaryY)
    doc.text(formatCurrencyForPDF(calculateTaxAmount()), pageWidth - margin, summaryY, { align: 'right' })
    summaryY += 8

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Total:', summaryX, summaryY)
    doc.text(formatCurrencyForPDF(calculateTotal()), pageWidth - margin, summaryY, { align: 'right' })

    summaryY += 15

    // Notes and Terms
    if (invoiceData.notes) {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text('Notes:', margin, summaryY)
      summaryY += 6
      doc.setFont('helvetica', 'normal')
      const notesLines = doc.splitTextToSize(invoiceData.notes, pageWidth - 2 * margin)
      doc.text(notesLines, margin, summaryY)
      summaryY += notesLines.length * 5 + 5
    }

    if (invoiceData.terms) {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text('Payment Terms:', margin, summaryY)
      summaryY += 6
      doc.setFont('helvetica', 'normal')
      const termsLines = doc.splitTextToSize(invoiceData.terms, pageWidth - 2 * margin)
      doc.text(termsLines, margin, summaryY)
    }

    // Footer
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(100, 100, 100)
      doc.text(
        `Page ${i} of ${pageCount}`,
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      )
      doc.text(
        'Thank you for your business!',
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 5,
        { align: 'center' }
      )
    }

    // Save PDF
    doc.save(`Invoice-${invoiceData.invoiceNumber}.pdf`)
  }

  const handlePrint = () => {
    window.print()
  }

  const subtotal = calculateSubtotal()
  const discountAmount = calculateDiscountAmount()
  const taxAmount = calculateTaxAmount()
  const total = calculateTotal()

  return (
    <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .invoice-print, .invoice-print * {
            visibility: visible;
          }
          .invoice-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="invoice-print">
        {/* Header */}
        <div className="border-b-4 border-purple-800 pb-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-purple-800 mb-2">TechM4India</h1>
              <p className="text-gray-600 text-sm">India's First Experiential Learning Ecosystem</p>
              <p className="text-gray-600 text-sm mt-1">Hyderabad, India</p>
              <p className="text-gray-600 text-sm">+91 6301814246 | techm4india@gmail.com</p>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">INVOICE</h2>
              <div className="text-sm space-y-1">
                <p><span className="font-semibold">Invoice #:</span> {invoiceData.invoiceNumber}</p>
                <p><span className="font-semibold">Date:</span> {formatDate(invoiceData.invoiceDate)}</p>
                <p><span className="font-semibold">Due Date:</span> {formatDate(invoiceData.dueDate)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Bill To:</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-lg">{invoiceData.billTo.name}</p>
            {invoiceData.billTo.company && <p className="text-gray-700">{invoiceData.billTo.company}</p>}
            <p className="text-gray-700">{invoiceData.billTo.address}</p>
            <p className="text-gray-700">
              {invoiceData.billTo.city}, {invoiceData.billTo.state} {invoiceData.billTo.zip}
            </p>
            <p className="text-gray-700">Email: {invoiceData.billTo.email}</p>
            <p className="text-gray-700">Phone: {invoiceData.billTo.phone}</p>
            {invoiceData.billTo.gstin && (
              <p className="text-gray-700">GSTIN: {invoiceData.billTo.gstin}</p>
            )}
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-800 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left">#</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Qty</th>
                <th className="border border-gray-300 px-4 py-3 text-right">Rate</th>
                <th className="border border-gray-300 px-4 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-300 px-4 py-3">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-3">{item.description}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(item.rate)}</td>
                  <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                    {formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex justify-end mb-8">
          <div className="w-80">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span className="font-semibold">{formatCurrency(subtotal)}</span>
              </div>
              {invoiceData.discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({invoiceData.discount}%):</span>
                  <span className="font-semibold">-{formatCurrency(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-700">
                <span>Tax ({invoiceData.taxRate}%):</span>
                <span className="font-semibold">{formatCurrency(taxAmount)}</span>
              </div>
              <div className="border-t-2 border-purple-800 pt-2 flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-purple-800">{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes & Terms */}
        {(invoiceData.notes || invoiceData.terms) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {invoiceData.notes && (
              <div>
                <h4 className="font-bold mb-2">Notes:</h4>
                <p className="text-gray-700 whitespace-pre-wrap">{invoiceData.notes}</p>
              </div>
            )}
            {invoiceData.terms && (
              <div>
                <h4 className="font-bold mb-2">Payment Terms:</h4>
                <p className="text-gray-700 whitespace-pre-wrap">{invoiceData.terms}</p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-6 text-center text-gray-600 text-sm">
          <p>Thank you for your business!</p>
          <p className="mt-2">TechM4India - Building India's Innovation Future</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="no-print flex gap-4 mt-8">
        {canEdit && onEdit && (
          <button
            onClick={onEdit}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium border border-green-700/50 transition-colors"
          >
            Edit Invoice
          </button>
        )}
        <button
          onClick={generatePDF}
          className="flex-1 flex items-center justify-center gap-2 bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
        <button
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center gap-2 bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 transition-colors"
        >
          <Printer className="w-5 h-5" />
          Print Invoice
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-3 bg-transparent text-purple-800 border border-purple-600 rounded-md hover:bg-purple-50 font-medium transition-colors"
          >
            Close
          </button>
        )}
      </div>
    </div>
  )
}
