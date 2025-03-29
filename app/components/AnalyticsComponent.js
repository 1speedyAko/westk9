'use client'

import { useCookieConsent } from '../context/CookieConsentContext'

export function AnalyticsComponent() {
  const { cookieConsent } = useCookieConsent()
  
  useEffect(() => {
    // Only load analytics if user has consented
    if (cookieConsent.analytics) {
      // Example: Initialize analytics
      console.log('Analytics initialized')
      // In a real app, you would initialize your analytics service here
    }
  }, [cookieConsent.analytics])
  
  return null // This is just a functional component with no UI
}