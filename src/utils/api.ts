const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export async function apiRequest<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('token')
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }))
    throw new Error(error.message || `HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export const api = {
  get: <T = unknown>(endpoint: string) => apiRequest<T>(endpoint, { method: 'GET' }),
  post: <T = unknown>(endpoint: string, data: unknown) => 
    apiRequest<T>(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: <T = unknown>(endpoint: string, data: unknown) => 
    apiRequest<T>(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: <T = unknown>(endpoint: string) => apiRequest<T>(endpoint, { method: 'DELETE' }),
}

