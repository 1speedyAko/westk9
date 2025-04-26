'use client'

import { useState } from 'react'
import { useCookieConsent } from '../context/CookieConsentContext'

async function saveConsentToServer(consent) {
  await fetch('/api/set-cookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(consent)
  })
}

export function CookieConsentBanner() {
  const { cookieConsent, updateConsent } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)

  if (cookieConsent.hasResponded) {
    return null
  }

  const handleAcceptAll = async () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      hasResponded: true
    }
    updateConsent(consent)
    await saveConsentToServer(consent)
  }

  const handleRejectAll = async () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      hasResponded: true
    }
    updateConsent(consent)
    await saveConsentToServer(consent)
  }

  const handleSavePreferences = async () => {
    const updatedConsent = {
      ...cookieConsent,
      hasResponded: true
    }
    updateConsent(updatedConsent)
    await saveConsentToServer(updatedConsent)
  }

  const handleCheckboxChange = (type) => {
    if (type === 'necessary') return

    updateConsent({
      ...cookieConsent,
      [type]: !cookieConsent[type],
      hasResponded: false
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t-2 border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-2">Cookie Consent</h2>
            <p className="text-sm text-gray-600">
              We use cookies to improve your experience. By clicking "Accept All", you consent to all cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setShowDetails(!showDetails)} className="px-4 py-2 border border-gray-300 rounded text-sm">
              {showDetails ? 'Hide Details' : 'Customize'}
            </button>
            <button onClick={handleRejectAll} className="px-4 py-2 border border-gray-300 rounded text-sm">
              Reject All
            </button>
            <button onClick={handleAcceptAll} className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
              Accept All
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-4 border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['necessary', 'analytics', 'marketing', 'preferences'].map((type) => (
                <div key={type} className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id={`${type}-cookies`}
                    checked={cookieConsent[type]}
                    disabled={type === 'necessary'}
                    onChange={() => handleCheckboxChange(type)}
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor={`${type}-cookies`} className="font-medium capitalize">{type} Cookies</label>
                    <p className="text-sm text-gray-600">
                      {type === 'necessary' ? 'Essential for the site.' : `Manage ${type} cookies.`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button onClick={handleSavePreferences} className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
