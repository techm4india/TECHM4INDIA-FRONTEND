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
  // Consistent calculation functions - used in both display and PDF
  const calculateSubtotal = () => {
    const subtotal = invoiceData.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0)
    return Math.round(subtotal * 100) / 100 // Round to 2 decimal places
  }

  const calculateDiscountAmount = () => {
    const subtotal = calculateSubtotal()
    const discount = (subtotal * invoiceData.discount) / 100
    return Math.round(discount * 100) / 100 // Round to 2 decimal places
  }

  const calculateTaxAmount = () => {
    const subtotal = calculateSubtotal()
    const discountAmount = calculateDiscountAmount()
    const taxableAmount = subtotal - discountAmount
    const tax = (taxableAmount * invoiceData.taxRate) / 100
    return Math.round(tax * 100) / 100 // Round to 2 decimal places
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const discountAmount = calculateDiscountAmount()
    const taxAmount = calculateTaxAmount()
    const total = subtotal - discountAmount + taxAmount
    return Math.round(total * 100) / 100 // Round to 2 decimal places
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

  // Format currency for PDF - matching display format exactly
  const formatCurrencyForPDF = (amount: number) => {
    // Round to 2 decimal places to match display
    const rounded = Math.round(amount * 100) / 100
    const parts = rounded.toFixed(2).split('.')
    const integerPart = parts[0]
    const decimalPart = parts[1]
    
    // Add comma separators for thousands (Indian format)
    let formatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    
    // Use ₹ symbol to match display - jsPDF should handle Unicode
    return `₹${formatted}.${decimalPart}`
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    let yPos = margin

    // Header Section - Matching display exactly (border-b-4 border-purple-800 pb-6 mb-6)
    // Company Header - Left side (text-4xl font-bold text-purple-800)
    doc.setFontSize(24)
    doc.setTextColor(88, 28, 135) // Purple-800
    doc.setFont('helvetica', 'bold')
    doc.text('TechM4India', margin, yPos + 8)
    
    yPos += 10
    doc.setFontSize(9)
    doc.setTextColor(75, 85, 99) // Gray-600
    doc.setFont('helvetica', 'normal')
    doc.text('India\'s First Experiential Learning Ecosystem', margin, yPos)
    
    yPos += 5
    doc.setFontSize(9)
    doc.text('Hyderabad, India', margin, yPos)
    yPos += 5
    doc.text('+91 6301814246 | techm4india@gmail.com', margin, yPos)
    
    // Invoice Title - Right side (text-3xl font-bold text-purple-800 mb-4)
    yPos = margin
    doc.setFontSize(22)
    doc.setTextColor(88, 28, 135) // Purple-800
    doc.setFont('helvetica', 'bold')
    doc.text('INVOICE', pageWidth - margin, yPos + 8, { align: 'right' })
    
    yPos += 12
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold') // font-semibold
    doc.text(`Invoice #: `, pageWidth - margin - 60, yPos, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    doc.text(invoiceData.invoiceNumber, pageWidth - margin, yPos, { align: 'right' })
    yPos += 5
    doc.setFont('helvetica', 'bold')
    doc.text(`Date: `, pageWidth - margin - 60, yPos, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    doc.text(formatDate(invoiceData.invoiceDate), pageWidth - margin, yPos, { align: 'right' })
    yPos += 5
    doc.setFont('helvetica', 'bold')
    doc.text(`Due Date: `, pageWidth - margin - 60, yPos, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    doc.text(formatDate(invoiceData.dueDate), pageWidth - margin, yPos, { align: 'right' })
    
    // Bottom border (border-b-4 border-purple-800)
    const headerBottomY = Math.max(yPos + 8, margin + 40)
    doc.setDrawColor(88, 28, 135) // Purple-800
    doc.setLineWidth(1.5) // Thicker line for border-b-4
    doc.line(margin, headerBottomY, pageWidth - margin, headerBottomY)
    
    yPos = headerBottomY + 15

    // Bill To Section - Matching display exactly (text-lg font-bold mb-3)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(0, 0, 0)
    doc.text('Bill To:', margin, yPos)
    yPos += 10
    
    // Bill To Box (bg-gray-50 p-4 rounded-lg)
    const billToBoxY = yPos - 2
    const billToBoxHeight = invoiceData.billTo.gstin ? 60 : 55
    doc.setFillColor(249, 250, 251) // Gray-50
    doc.roundedRect(margin, billToBoxY, pageWidth - 2 * margin, billToBoxHeight, 3, 3, 'F')
    
    // Name (font-semibold text-lg)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(0, 0, 0)
    doc.text(invoiceData.billTo.name, margin + 4, yPos)
    yPos += 6
    
    if (invoiceData.billTo.company) {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(55, 65, 81) // Gray-700
      doc.text(invoiceData.billTo.company, margin + 4, yPos)
      yPos += 5
    }
    
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(55, 65, 81) // Gray-700
    doc.text(invoiceData.billTo.address, margin + 4, yPos)
    yPos += 5
    doc.text(`${invoiceData.billTo.city}, ${invoiceData.billTo.state} ${invoiceData.billTo.zip}`, margin + 4, yPos)
    yPos += 5
    doc.text(`Email: ${invoiceData.billTo.email}`, margin + 4, yPos)
    yPos += 5
    doc.text(`Phone: ${invoiceData.billTo.phone}`, margin + 4, yPos)
    
    if (invoiceData.billTo.gstin) {
      yPos += 5
      doc.text(`GSTIN: ${invoiceData.billTo.gstin}`, margin + 4, yPos)
    }
    
    yPos = billToBoxY + billToBoxHeight + 15

    // Items Table - Use exact values from items (recalculate to ensure consistency)
    const tableData = invoiceData.items.map((item, index) => {
      // Recalculate amount to ensure consistency
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
      headStyles: { 
        fillColor: [88, 28, 135], // Purple-800
        textColor: [255, 255, 255], // White
        fontStyle: 'bold',
        fontSize: 10,
        halign: 'left',
        lineColor: [209, 213, 219], // Gray-300
        lineWidth: 0.5,
        font: 'helvetica'
      },
      bodyStyles: {
        fontSize: 9,
        textColor: [0, 0, 0],
        lineColor: [209, 213, 219], // Gray-300
        lineWidth: 0.5,
        font: 'helvetica'
      },
      alternateRowStyles: {
        fillColor: [249, 250, 251] // Gray-50 for alternating rows
      },
      styles: { 
        fontSize: 9,
        cellPadding: 3,
        lineColor: [209, 213, 219], // Gray-300 borders
        lineWidth: 0.5,
        font: 'helvetica',
        overflow: 'linebreak'
      },
      columnStyles: {
        0: { cellWidth: 20, halign: 'left', font: 'helvetica' },
        1: { cellWidth: 'auto', halign: 'left', font: 'helvetica' },
        2: { cellWidth: 30, halign: 'center', font: 'helvetica' },
        3: { cellWidth: 40, halign: 'right', font: 'helvetica' },
        4: { cellWidth: 40, halign: 'right', fontStyle: 'bold', font: 'helvetica' },
      },
      margin: { left: margin, right: margin },
    })

    const finalY = (doc as any).lastAutoTable.finalY + 10

    // Summary Section - Matching display exactly (flex justify-end, w-80, space-y-2)
    let summaryY = finalY + 5
    const summaryWidth = 80 // w-80 equivalent
    const summaryX = pageWidth - margin - summaryWidth

    // Subtotal (text-gray-700, font-semibold)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(55, 65, 81) // Gray-700
    doc.text('Subtotal:', summaryX, summaryY)
    doc.setFont('helvetica', 'bold')
    doc.text(formatCurrencyForPDF(calculateSubtotal()), pageWidth - margin, summaryY, { align: 'right' })
    summaryY += 7 // space-y-2 equivalent

    if (invoiceData.discount > 0) {
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(22, 163, 74) // Green-600
      doc.text(`Discount (${invoiceData.discount}%):`, summaryX, summaryY)
      doc.setFont('helvetica', 'bold')
      doc.text(`-${formatCurrencyForPDF(calculateDiscountAmount())}`, pageWidth - margin, summaryY, { align: 'right' })
      summaryY += 7
    }

    // Tax (text-gray-700, font-semibold)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(55, 65, 81) // Gray-700
    doc.text(`Tax (${invoiceData.taxRate}%):`, summaryX, summaryY)
    doc.setFont('helvetica', 'bold')
    doc.text(formatCurrencyForPDF(calculateTaxAmount()), pageWidth - margin, summaryY, { align: 'right' })
    summaryY += 8

    // Total (border-t-2 border-purple-800 pt-2 text-xl font-bold text-purple-800)
    doc.setDrawColor(88, 28, 135) // Purple-800
    doc.setLineWidth(1.0) // border-t-2
    doc.line(summaryX, summaryY - 1, pageWidth - margin, summaryY - 1)
    
    doc.setFontSize(12) // text-xl equivalent
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(0, 0, 0)
    doc.text('Total:', summaryX, summaryY + 2)
    doc.setTextColor(88, 28, 135) // Purple-800
    doc.text(formatCurrencyForPDF(calculateTotal()), pageWidth - margin, summaryY + 2, { align: 'right' })
    summaryY += 10

    summaryY += 15

    // Notes and Terms - Matching display layout (side by side if both exist)
    summaryY += 10
    const notesTermsWidth = (pageWidth - 2 * margin - 20) / 2
    
    if (invoiceData.notes || invoiceData.terms) {
      if (invoiceData.notes && invoiceData.terms) {
        // Both exist - side by side
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        doc.text('Notes:', margin, summaryY)
        summaryY += 6
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(55, 65, 81) // Gray-700
        const notesLines = doc.splitTextToSize(invoiceData.notes, notesTermsWidth)
        doc.text(notesLines, margin, summaryY)
        const notesHeight = notesLines.length * 5
        
        // Terms on the right
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        doc.text('Payment Terms:', margin + notesTermsWidth + 20, summaryY - 6)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(55, 65, 81)
        const termsLines = doc.splitTextToSize(invoiceData.terms, notesTermsWidth)
        doc.text(termsLines, margin + notesTermsWidth + 20, summaryY)
        summaryY += Math.max(notesHeight, termsLines.length * 5) + 10
      } else if (invoiceData.notes) {
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        doc.text('Notes:', margin, summaryY)
        summaryY += 6
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(55, 65, 81)
        const notesLines = doc.splitTextToSize(invoiceData.notes, pageWidth - 2 * margin)
        doc.text(notesLines, margin, summaryY)
        summaryY += notesLines.length * 5 + 10
      } else if (invoiceData.terms) {
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        doc.text('Payment Terms:', margin, summaryY)
        summaryY += 6
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(55, 65, 81)
        const termsLines = doc.splitTextToSize(invoiceData.terms, pageWidth - 2 * margin)
        doc.text(termsLines, margin, summaryY)
        summaryY += termsLines.length * 5 + 10
      }
    }

    // Signatures Section - Matching display styling (side by side, same spacing)
    summaryY += 15
    const signatureY = summaryY
    const signatureWidth = 90
    const signatureHeight = 45
    const signatureGap = 80 // Gap between signatures
    const totalSignatureWidth = signatureWidth * 2 + signatureGap
    const signatureStartX = (pageWidth - totalSignatureWidth) / 2

    // Client Signature
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(0, 0, 0)
    doc.text('Client Signature', signatureStartX, signatureY)
    
    // Signature box border
    doc.setDrawColor(209, 213, 219) // Gray-300
    doc.setLineWidth(0.5)
    doc.roundedRect(signatureStartX, signatureY + 3, signatureWidth, signatureHeight, 2, 2, 'S')
    
    if (invoiceData.clientSignature) {
      try {
        doc.addImage(invoiceData.clientSignature, 'PNG', signatureStartX + 2, signatureY + 5, signatureWidth - 4, signatureHeight - 4)
      } catch (e) {
        // If image fails, draw signature line
        doc.setDrawColor(156, 163, 175) // Gray-400
        doc.setLineWidth(0.5)
        doc.line(signatureStartX + 5, signatureY + signatureHeight / 2, signatureStartX + signatureWidth - 5, signatureY + signatureHeight / 2)
      }
    } else {
      // Draw signature line
      doc.setDrawColor(156, 163, 175) // Gray-400
      doc.setLineWidth(0.5)
      doc.line(signatureStartX + 5, signatureY + signatureHeight / 2, signatureStartX + signatureWidth - 5, signatureY + signatureHeight / 2)
    }
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(55, 65, 81) // Gray-700
    doc.text(invoiceData.billTo.name || '________________', signatureStartX, signatureY + signatureHeight + 8, { maxWidth: signatureWidth })

    // CFO/CEO Signature
    const authX = signatureStartX + signatureWidth + signatureGap
    const signatureType = invoiceData.signatureType || 'cfo'
    const isCEO = signatureType === 'ceo'
    const signatureLabel = isCEO ? 'CEO Signature' : 'CFO Signature'
    const signatureName = isCEO ? 'Mahesh Thanniru' : 'Chenna Jeevan'
    const signatureImage = isCEO ? invoiceData.ceoSignature : invoiceData.cfoSignature
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(0, 0, 0)
    doc.text(signatureLabel, authX, signatureY)
    
    // Signature box border
    doc.setDrawColor(209, 213, 219) // Gray-300
    doc.setLineWidth(0.5)
    doc.roundedRect(authX, signatureY + 3, signatureWidth, signatureHeight, 2, 2, 'S')
    
    if (signatureImage) {
      try {
        doc.addImage(signatureImage, 'PNG', authX + 2, signatureY + 5, signatureWidth - 4, signatureHeight - 4)
      } catch (e) {
        // If image fails, draw signature line
        doc.setDrawColor(156, 163, 175) // Gray-400
        doc.setLineWidth(0.5)
        doc.line(authX + 5, signatureY + signatureHeight / 2, authX + signatureWidth - 5, signatureY + signatureHeight / 2)
      }
    } else {
      // Draw signature line
      doc.setDrawColor(156, 163, 175) // Gray-400
      doc.setLineWidth(0.5)
      doc.line(authX + 5, signatureY + signatureHeight / 2, authX + signatureWidth - 5, signatureY + signatureHeight / 2)
    }
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(55, 65, 81) // Gray-700
    doc.text(signatureName, authX, signatureY + signatureHeight + 8, { maxWidth: signatureWidth })

    // Footer - Matching display exactly (border-t-2 border-gray-300 pt-6 text-center text-gray-600 text-sm)
    summaryY += 15
    
    // Top border line
    doc.setDrawColor(209, 213, 219) // Gray-300
    doc.setLineWidth(1.0) // border-t-2
    doc.line(margin, summaryY, pageWidth - margin, summaryY)
    
    summaryY += 8
    
    // Thank you message (text-gray-600 text-sm)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(107, 114, 128) // Gray-600
    doc.text(
      'Thank you for your business!',
      pageWidth / 2,
      summaryY,
      { align: 'center' }
    )
    
    // Company slogan (mt-2)
    doc.setFontSize(9)
    doc.text(
      'TechM4India - Building India\'s Innovation Future',
      pageWidth / 2,
      summaryY + 6,
      { align: 'center' }
    )
    
    // Page numbers on all pages
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
              {invoiceData.items.map((item, index) => {
                // Recalculate amount to ensure consistency with PDF
                const itemAmount = Math.round((item.quantity * item.rate) * 100) / 100
                return (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-300 px-4 py-3">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-3">{item.description}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(item.rate)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                      {formatCurrency(itemAmount)}
                    </td>
                  </tr>
                )
              })}
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

        {/* Signatures */}
        <div className="grid grid-cols-2 gap-12 mb-8 mt-12">
          <div>
            <h4 className="font-bold mb-4 text-gray-700">Client Signature</h4>
            {invoiceData.clientSignature ? (
              <div className="border-2 border-gray-300 rounded p-4 bg-gray-50">
                <img 
                  src={invoiceData.clientSignature} 
                  alt="Client Signature" 
                  className="max-w-full h-24 object-contain"
                />
              </div>
            ) : (
              <div className="border-b-2 border-gray-400 pb-2 pt-8">
                <div className="h-16"></div>
              </div>
            )}
            <p className="mt-2 text-gray-700 font-semibold">{invoiceData.billTo.name}</p>
          </div>
          <div>
            {(() => {
              const signatureType = invoiceData.signatureType || 'cfo'
              const isCEO = signatureType === 'ceo'
              const signatureLabel = isCEO ? 'CEO Signature' : 'CFO Signature'
              const signatureName = isCEO ? 'Mahesh Thanniru' : 'Chenna Jeevan'
              const signatureImage = isCEO ? invoiceData.ceoSignature : invoiceData.cfoSignature
              
              return (
                <>
                  <h4 className="font-bold mb-4 text-gray-700">{signatureLabel}</h4>
                  {signatureImage ? (
                    <div className="border-2 border-gray-300 rounded p-4 bg-gray-50">
                      <img 
                        src={signatureImage} 
                        alt={signatureLabel} 
                        className="max-w-full h-24 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="border-b-2 border-gray-400 pb-2 pt-8">
                      <div className="h-16"></div>
                    </div>
                  )}
                  <p className="mt-2 text-gray-700 font-semibold">{signatureName}</p>
                </>
              )
            })()}
          </div>
        </div>

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
