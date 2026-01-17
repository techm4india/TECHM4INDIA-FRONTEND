import { useState } from 'react'
import { User, Mail, Phone, FileText, Briefcase, GraduationCap, X, Send, Upload } from 'lucide-react'
import { useToast } from '../utils/toast'

interface JobApplicationFormProps {
  selectedRole?: string
  onClose?: () => void
}

export default function JobApplicationForm({ selectedRole, onClose }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: selectedRole || '',
    experience: '',
    education: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast, ToastComponent } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const applicationData = new FormData()
      applicationData.append('name', formData.name)
      applicationData.append('email', formData.email)
      applicationData.append('phone', formData.phone)
      applicationData.append('role', formData.role)
      applicationData.append('experience', formData.experience)
      applicationData.append('education', formData.education)
      applicationData.append('coverLetter', formData.coverLetter)
      applicationData.append('portfolio', formData.portfolio)
      applicationData.append('linkedin', formData.linkedin)
      
      if (formData.resume) {
        applicationData.append('resume', formData.resume)
      }

      // Use fetch directly for FormData
      const token = localStorage.getItem('token')
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
      
      const headers: Record<string, string> = {}
      if (token) {
        headers['Authorization'] = `Bearer ${token}`
      }

      const response = await fetch(`${API_URL}/careers/apply`, {
        method: 'POST',
        headers,
        body: applicationData,
      })

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Request failed' }))
        throw new Error(error.message || `HTTP error! status: ${response.status}`)
      }

      showToast('Application submitted successfully! We will get back to you soon.', 'success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: selectedRole || '',
        experience: '',
        education: '',
        resume: null,
        coverLetter: '',
        portfolio: '',
        linkedin: '',
      })
      
      // Close form after a delay
      setTimeout(() => {
        onClose?.()
      }, 2000)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit application. Please try again.'
      showToast(errorMessage, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  return (
    <>
      {ToastComponent}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-purple-900/95 border-2 border-purple-500/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Job Application Form
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
                  Full Name *
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
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
                    Phone Number *
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Position Applied For *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="">Select a position</option>
                  <option value="AI Engineer">AI Engineer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Product Development Engineer">Product Development Engineer</option>
                  <option value="IoT & Robotics Engineer">IoT & Robotics Engineer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="R&D Engineer (Innovation Lab)">R&D Engineer (Innovation Lab)</option>
                  <option value="Client Acquisition Manager">Client Acquisition Manager</option>
                  <option value="Marketing Manager">Marketing Manager</option>
                  <option value="Client Relationship Manager">Client Relationship Manager</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Education *
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="">Select education</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-800 file:text-white hover:file:bg-purple-700 file:cursor-pointer"
                />
                {formData.resume && (
                  <p className="mt-2 text-sm text-gray-400">Selected: {formData.resume.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Portfolio/GitHub URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="https://github.com/yourusername"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-700 font-medium border border-purple-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
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
