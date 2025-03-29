'use client'

import { useState } from 'react'
import { useCookieConsent } from '../context/CookieConsentContext'

export function CookieConsentBanner() {
  const { cookieConsent, updateConsent } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)
  
  // If user has already responded, don't show the banner
  if (cookieConsent.hasResponded) {
    return null
  }
  
  const handleAcceptAll = () => {
    updateConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    })
  }
  
  const handleRejectAll = () => {
    updateConsent({
      necessary: true, // Always necessary
      analytics: false,
      marketing: false,
      preferences: false
    })
  }
  
  const handleCustomize = () => {
    setShowDetails(!showDetails)
  }
  
  const handleSavePreferences = () => {
    updateConsent({
      ...cookieConsent,
      hasResponded: true
    })
  }
  
  const handleCheckboxChange = (type) => {
    if (type === 'necessary') return // Can't change necessary cookies
    
    updateConsent({
      ...cookieConsent,
      [type]: !cookieConsent[type],
      hasResponded: false // Reset until they save
    })
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t-2 border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-2">Cookie Consent</h2>
            <p className="text-sm text-gray-600">
              We use cookies to improve your experience on our site. By clicking "Accept All", you consent to the use of all cookies. 
              You can customize your preferences or reject non-essential cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={handleCustomize}
              className="px-4 py-2 border border-gray-300 rounded text-sm"
            >
              {showDetails ? 'Hide Details' : 'Customize'}
            </button>
            <button 
              onClick={handleRejectAll}
              className="px-4 py-2 border border-gray-300 rounded text-sm"
            >
              Reject All
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
            >
              Accept All
            </button>
          </div>
        </div>
        
        {showDetails && (
          <div className="mt-4 border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="necessary-cookies"
                  checked={cookieConsent.necessary} 
                  disabled
                  className="mt-1"
                />
                <div>
                  <label htmlFor="necessary-cookies" className="font-medium">Necessary Cookies</label>
                  <p className="text-sm text-gray-600">Essential for the website to function properly.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="analytics-cookies"
                  checked={cookieConsent.analytics} 
                  onChange={() => handleCheckboxChange('analytics')}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="analytics-cookies" className="font-medium">Analytics Cookies</label>
                  <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="marketing-cookies"
                  checked={cookieConsent.marketing} 
                  onChange={() => handleCheckboxChange('marketing')}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="marketing-cookies" className="font-medium">Marketing Cookies</label>
                  <p className="text-sm text-gray-600">Used to deliver relevant advertisements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="preferences-cookies"
                  checked={cookieConsent.preferences} 
                  onChange={() => handleCheckboxChange('preferences')}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="preferences-cookies" className="font-medium">Preferences Cookies</label>
                  <p className="text-sm text-gray-600">Remember your settings and preferences.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
