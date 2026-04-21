'use client'

import { useState, useEffect } from 'react'
import { Cookie, ChevronDown, ChevronUp, Shield, BarChart2, Megaphone, Settings, X } from 'lucide-react'

const COOKIE_KEY = 'wk9_cookie_consent'

const cookieTypes = [
  {
    type: 'necessary',
    label: 'Necessary',
    icon: Shield,
    description: 'Essential cookies that keep the site functional. These cannot be disabled.',
    required: true,
  },
  {
    type: 'analytics',
    label: 'Analytics',
    icon: BarChart2,
    description: 'Help us understand how visitors interact with our site to improve your experience.',
    required: false,
  },
  {
    type: 'marketing',
    label: 'Marketing',
    icon: Megaphone,
    description: 'Used to deliver personalised advertisements relevant to you.',
    required: false,
  },
  {
    type: 'preferences',
    label: 'Preferences',
    icon: Settings,
    description: 'Allow the site to remember choices you make, like language or region.',
    required: false,
  },
]

function Toggle({ checked, onChange, disabled }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
        disabled
          ? 'cursor-not-allowed bg-emerald-500/40'
          : checked
          ? 'bg-emerald-500 cursor-pointer'
          : 'bg-slate-600 cursor-pointer hover:bg-slate-500'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform duration-200 ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })

  // Only show if no prior choice stored in localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (chosenConsent) => {
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify(chosenConsent))
    } catch {}
    // Also write a real cookie for server-side reading
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(JSON.stringify(chosenConsent))}; path=/; max-age=${60 * 60 * 24 * 365}`
    setVisible(false)
  }

  const handleAcceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true, preferences: true })

  const handleRejectAll = () =>
    save({ necessary: true, analytics: false, marketing: false, preferences: false })

  const handleSavePreferences = () => save(consent)

  const handleToggle = (type) => {
    if (type === 'necessary') return
    setConsent((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] px-4 pb-4 md:pb-6 md:px-6">
      <div className="max-w-3xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">

        {/* Top bar */}
        <div className="px-5 pt-5 pb-4 flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm">We value your privacy</h2>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed max-w-xl">
                We use cookies to enhance your browsing experience and analyse site traffic.
                By clicking <span className="text-white">&quot;Accept All&quot;</span>, you consent to our use of cookies.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white border border-white/10 hover:border-white/20 px-3 py-2 rounded-lg transition-all duration-200"
            >
              Customize
              {showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            <button
              onClick={handleRejectAll}
              className="text-xs font-medium text-slate-400 hover:text-white border border-white/10 hover:border-white/20 px-3 py-2 rounded-lg transition-all duration-200"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Accept All
            </button>
          </div>
        </div>

        {/* Expandable details */}
        {showDetails && (
          <div className="border-t border-white/5 px-5 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cookieTypes.map(({ type, label, icon: Icon, description, required }) => (
                <div
                  key={type}
                  className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-700/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">
                        {label}
                        {required && (
                          <span className="ml-1.5 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">
                            Required
                          </span>
                        )}
                      </p>
                      <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">{description}</p>
                    </div>
                  </div>
                  <Toggle
                    checked={!!consent[type]}
                    onChange={() => handleToggle(type)}
                    disabled={required}
                  />
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-end">
              <button
                onClick={handleSavePreferences}
                className="text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg transition-all duration-200"
              >
                Save My Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
