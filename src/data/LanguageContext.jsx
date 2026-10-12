import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const stored = localStorage.getItem('tarantino-language')
      if (stored === 'en' || stored === 'fr') return stored
    } catch {
      // Storage can be blocked; fall back to the browser language.
    }
    const browserLanguage = (navigator.language || '').toLowerCase()
    return browserLanguage.startsWith('fr') || browserLanguage.startsWith('ar') ? 'fr' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('tarantino-language', language)
    } catch {
      // Ignore storage failures.
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'fr' : 'en'))
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}