'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Lang = 'en' | 'mr'

type Ctx = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'mr') {
      setLang(saved)
      return
    }

    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('mr')) {
      setLang('mr')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'mr' ? 'mr-IN' : 'en'
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return ctx
}
