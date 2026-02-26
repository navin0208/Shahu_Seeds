'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { lang, setLang } = useLanguage()

  const copy = {
    en: {
      navItems: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
      ],
      getStarted: 'Get Started',
      toggleMenu: 'Toggle menu',
      language: 'Language',
      english: 'EN',
      marathi: 'मराठी',
    },
    mr: {
      navItems: [
        { href: '/', label: 'मुख्यपृष्ठ' },
        { href: '/about', label: 'आमच्याबद्दल' },
        { href: '/gallery', label: 'गॅलरी' },
        { href: '/contact', label: 'संपर्क' },
      ],
      getStarted: 'सुरुवात करा',
      toggleMenu: 'मेनू टॉगल करा',
      language: 'भाषा',
      english: 'EN',
      marathi: 'मराठी',
    },
  } as const

  const t = copy[lang]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const linkBase =
    'relative text-sm font-medium tracking-wide transition-colors duration-200'
  const linkActive = 'text-primary'
  const linkIdle = 'text-foreground/80 hover:text-foreground'

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-border shadow-sm'
          : 'bg-white/70 backdrop-blur-md border-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-28' : 'h-32'
          }`}
        >
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className=" h-9 rounded-xl  text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
             <img className=' h-28' src="/Shiv.png" alt="test" />
             
            </div>
            <div className="hidden sm:block">
              {/* <p className="text-sm font-semibold tracking-[0.18em] text-foreground">
                SHAHU SEEDS
              </p>
              <p className="text-[11px] text-muted-foreground -mt-0.5">
                Quality First
              </p> */}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {t.navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBase} ${active ? linkActive : linkIdle}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-3">
            <div className="inline-flex items-center rounded-lg border border-border bg-white/80 p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label={`${t.language}: English`}
                className={`rounded-md px-2.5 py-1 transition-colors ${
                  lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground/80 hover:bg-muted'
                }`}
              >
                {t.english}
              </button>
              <button
                type="button"
                onClick={() => setLang('mr')}
                aria-label={`${t.language}: Marathi`}
                className={`rounded-md px-2.5 py-1 transition-colors ${
                  lang === 'mr' ? 'bg-primary text-primary-foreground' : 'text-foreground/80 hover:bg-muted'
                }`}
              >
                {t.marathi}
              </button>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-accent hover:-translate-y-0.5"
            >
              {t.getStarted}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={t.toggleMenu}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4 border-t border-border' : 'max-h-0'
          }`}
        >
          <div className="pt-3 flex flex-col gap-2">
            <div className="mb-1 flex items-center justify-between rounded-lg border border-border bg-white/80 px-3 py-2">
              <span className="text-xs font-semibold text-muted-foreground">{t.language}</span>
              <div className="inline-flex items-center rounded-md border border-border bg-background p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded px-2 py-1 transition-colors ${
                    lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground/80'
                  }`}
                >
                  {t.english}
                </button>
                <button
                  type="button"
                  onClick={() => setLang('mr')}
                  className={`rounded px-2 py-1 transition-colors ${
                    lang === 'mr' ? 'bg-primary text-primary-foreground' : 'text-foreground/80'
                  }`}
                >
                  {t.marathi}
                </button>
              </div>
            </div>

            {t.navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/85 hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors"
            >
              {t.getStarted}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
