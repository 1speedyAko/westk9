// 1. Setting cookies in a Server Action
// File: app/actions.js
'use server'

import { cookies } from 'next/headers'

export async function setCookie(name, value) {
  cookies().set({
    name,
    value,
    // Optional configurations
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: 'strict'
  })
  
  return { success: true }
}

export async function getCookieOnServer(name) {
  const cookieStore = cookies()
  const value = cookieStore.get(name)
  return value?.value
}

// 2. Reading cookies on the server
// File: app/page.js
import { cookies } from 'next/headers'
import { setCookie, getCookieOnServer } from './actions'

export default function Home() {
  // This function runs on the server
  async function getServerCookies() {
    const cookieStore = cookies()
    // Get all cookies
    const allCookies = cookieStore.getAll()
    return allCookies
  }
  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Cookie Example</h1>
      
      {/* Set cookie form */}
      <form action={async (formData) => {
        'use server'
        const name = formData.get('name')
        const value = formData.get('value')
        await setCookie(name, value)
      }}>
        <div className="mb-4">
          <label className="block mb-2">Cookie Name</label>
          <input name="name" type="text" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Cookie Value</label>
          <input name="value" type="text" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Set Cookie
        </button>
      </form>
      
      <div className="mt-8">
        <CookieViewer />
      </div>
    </main>
  )
}

// 3. Client component to view cookies
// File: app/components/CookieViewer.js
'use client'

import { useState, useEffect } from 'react'

export function CookieViewer() {
  const [cookies, setCookies] = useState({})
  
  // Function to parse cookies from document.cookie
  const parseCookies = () => {
    const cookieString = document.cookie
    const cookieArray = cookieString.split('; ')
    const cookieObject = {}
    
    cookieArray.forEach(cookie => {
      if (cookie) {
        const [name, value] = cookie.split('=')
        cookieObject[name] = decodeURIComponent(value)
      }
    })
    
    return cookieObject
  }
  
  useEffect(() => {
    // Update cookies when component mounts and when document.cookie changes
    const getCookies = () => {
      const parsedCookies = parseCookies()
      setCookies(parsedCookies)
    }
    
    getCookies()
    
    // Set up an interval to check for cookie changes
    const intervalId = setInterval(getCookies, 1000)
    
    return () => clearInterval(intervalId)
  }, [])
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Current Cookies</h2>
      
      {Object.keys(cookies).length === 0 ? (
        <p>No cookies found</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(cookies).map(([name, value]) => (
              <tr key={name}>
                <td className="border p-2">{name}</td>
                <td className="border p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}