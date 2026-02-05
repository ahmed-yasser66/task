'use client'

import { useState, useRef, KeyboardEvent, ClipboardEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function VerifyPage() {
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [resending, setResending] = useState<boolean>(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  
  const handleChange = (index: number, value: string) => {
    
    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError('') 

    
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    
    if (index === 5 && value) {
      const code = [...newOtp.slice(0, 5), value].join('')
      if (code.length === 6) {
        handleVerify(code)
      }
    }
  }

  
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = [...otp]
    pastedData.split('').forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char
      }
    })
    setOtp(newOtp)

    
    const lastFilledIndex = Math.min(pastedData.length - 1, 5)
    inputRefs.current[lastFilledIndex]?.focus()

    
    if (pastedData.length === 6) {
      handleVerify(pastedData)
    }
  }

  
  const handleVerify = async (code: string) => {
    setLoading(true)
    setError('')

    try {
      
      const token = localStorage.getItem('auth-token')
      
      const response = await fetch(`https://tinytales.trendline.marketing/api/auth/verify-email`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ code }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.message || 'Invalid verification code')
        setOtp(new Array(6).fill(''))
        inputRefs.current[0]?.focus()
        return
      }

      const data = await response.json()

      
      if (data.token) {
        localStorage.setItem('auth-token', data.token)
      }

      
      router.push('/dashboard')
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setOtp(new Array(6).fill(''))
      inputRefs.current[0]?.focus()
    } finally {
      setLoading(false)
    }
  }

  
  const handleResend = async () => {
    setResending(true)
    setError('')

    try {
      
      const token = localStorage.getItem('auth-token')
      
      
      const response = await fetch('https://tinytales.trendline.marketing/api/auth/verify-email/resend-code', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })

      if (!response.ok) {
        setError('Failed to resend code')
        return
      }

      
      alert('Verification code sent successfully!')
    } catch (err) {
      setError('Failed to resend code. Please try again.')
    } finally {
      setResending(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
            <p className="text-gray-600">
              We've sent a 6-digit code to your email
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* OTP Input Fields */}
          <div className="mb-6">
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  disabled={loading}
                  className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed text-gray-700"
                />
              ))}
            </div>
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-lg">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600 mr-2"></div>
                <span className="text-sm text-indigo-600 font-medium">Verifying...</span>
              </div>
            </div>
          )}

          {/* Resend Code */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>
            <button
              type="button"
              onClick={handleResend}
              disabled={resending || loading}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {resending ? 'Sending...' : 'Resend Code'}
            </button>
          </div>

          {/* Back to Login */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              Wrong email?{' '}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Back to login
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}