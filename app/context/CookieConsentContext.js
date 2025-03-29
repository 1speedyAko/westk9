'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const CookieConsentContext = createContext(null)

export function CookieConsentProvider({ children }) {
  const [cookieConsent, setCookieConsent] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false,
    hasResponded: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent')
    if (savedConsent) {
      setCookieConsent(JSON.parse(savedConsent))
    }
  }, [])

  const updateConsent = (newConsent) => {
    const updatedConsent = { ...newConsent, hasResponded: true }
    setCookieConsent(updatedConsent)
    localStorage.setItem('cookieConsent', JSON.stringify(updatedConsent))
    
    // If analytics is accepted, set the analytics cookies
    if (updatedConsent.analytics) {
      document.cookie = `analytics_enabled=true; max-age=${60 * 60 * 24 * 365}; path=/; samesite=strict`
    } else {
      document.cookie = `analytics_enabled=false; max-age=0; path=/; samesite=strict`
    }
    
    // Similarly for marketing cookies
    if (updatedConsent.marketing) {
      document.cookie = `marketing_enabled=true; max-age=${60 * 60 * 24 * 365}; path=/; samesite=strict`
    } else {
      document.cookie = `marketing_enabled=false; max-age=0; path=/; samesite=strict`
    }
    
    // And for preferences cookies
    if (updatedConsent.preferences) {
      document.cookie = `preferences_enabled=true; max-age=${60 * 60 * 24 * 365}; path=/; samesite=strict`
    } else {
      document.cookie = `preferences_enabled=false; max-age=0; path=/; samesite=strict`
    }
  }

  return (
    <CookieConsentContext.Provider value={{ cookieConsent, updateConsent }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}