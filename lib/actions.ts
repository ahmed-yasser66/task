'use server'

// Login Action
const baseUrl = 'https://tinytales.trendline.marketing/api'
export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Validate inputs
  if (!email || !password) {
    return { error: 'Email and password are required', token: null }
  }

  try {
    // TODO: Replace with your actual authentication logic
    // Example: Call your API, verify credentials, etc.
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      return { error: 'Invalid credentials', token: null }
    }

    const data = await response.json()

    // Return the token to be stored in localStorage on the client
    return { error: null, token: data.data.token, success: true }
  } catch (error) {
    console.error('Login error:', error)
    return { error: 'Something went wrong. Please try again.', token: null }
  }
}

// Register Action
export async function registerAction(prevState: any, formData: FormData) {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const phoneNumber = formData.get('phoneNumber') as string
  const countryCode = formData.get('countryCode') as string

  // Validate inputs
  if (!fullName || !email || !password || !phoneNumber || !countryCode) {
    return { error: 'All fields are required', token: null }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Invalid email format', token: null }
  }

  // Password strength validation
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters long', token: null }
  }

  try {
    // TODO: Replace with your actual registration logic
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fullName,
        email,
        mobile: phoneNumber,
        password,
        password_confirmation: password,
        mobile_country_code: countryCode,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { error: errorData.message || 'Registration failed', token: null }
    }

    const data = await response.json()

    // Return the token to be stored in localStorage on the client
    return { error: null, token: data.data.token, success: true }
  } catch (error) {
    console.error('Registration error:', error)
    return { error: 'Something went wrong. Please try again.', token: null }
  }
}

// Logout Action (client-side)
// Call this from a client component
// export function logout() {
//   if (typeof window !== 'undefined') {
//     localStorage.removeItem('auth-token')
//     window.location.href = '/login'
//   }
// }