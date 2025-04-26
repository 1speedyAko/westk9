'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const CookieConsentContext = createContext()

export function useCookieConsent() {
  return useContext(CookieConsentContext)
}

export function CookieConsentProvider({ children }) {
  const [cookieConsent, setCookieConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
    hasResponded: false
  })

  useEffect(() => {
    const cookieString = document.cookie
    const cookiesArray = cookieString.split('; ')
    const cookieObject = {}
    
    cookiesArray.forEach(cookie => {
      const [name, value] = cookie.split('=')
      cookieObject[name] = decodeURIComponent(value)
    })
    
    if (cookieObject.cookie_consent) {
      try {
        const consent = JSON.parse(cookieObject.cookie_consent)
        setCookieConsent(consent)
      } catch (error) {
        console.error('Invalid consent cookie', error)
      }
    }
  }, [])

  const updateConsent = (newConsent) => {
    setCookieConsent(newConsent)
  }

  return (
    <CookieConsentContext.Provider value={{ cookieConsent, updateConsent }}>
      {children}
    </CookieConsentContext.Provider>
  )
}
