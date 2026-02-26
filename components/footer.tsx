'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/language-context'

export default function Footer() {
  const { lang } = useLanguage()

  const t = {
    en: {
      description: 'Redefining onion seed performance through research-driven innovation.',
      company: 'Company',
      resources: 'Resources',
      contact: 'Contact',
      home: 'Home',
      about: 'About Us',
      blog: 'Blog',
      faq: 'FAQ',
      support: 'Support',
      phoneLabel: 'Phone',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    mr: {
      description: 'संशोधनाधारित नवकल्पनांद्वारे कांदा बियाण्यांची कामगिरी नव्याने घडवत आहोत.',
      company: 'कंपनी',
      resources: 'संसाधने',
      contact: 'संपर्क',
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      blog: 'ब्लॉग',
      faq: 'प्रश्नोत्तरे',
      support: 'सहाय्य',
      phoneLabel: 'फोन',
      rights: 'सर्व हक्क राखीव.',
      privacy: 'गोपनीयता धोरण',
      terms: 'सेवा अटी',
    },
  }[lang]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SH</span>
              </div>
              <span className="font-bold text-lg">SHAHU SEEDS</span>
            </div>
            <p className="text-sm opacity-90">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t.company}</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:text-secondary transition-colors">
                {t.home}
              </Link>
              <Link href="/about" className="hover:text-secondary transition-colors">
                {t.about}
              </Link>
              <Link href="/contact" className="hover:text-secondary transition-colors">
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t.resources}</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-secondary transition-colors">
                {t.blog}
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                {t.faq}
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                {t.support}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t.contact}</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <p>Email: info@shahuseed.com</p>
              <p>{t.phoneLabel}: +1 (555) 123-4567</p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-secondary transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-75">&copy; 2024 SHAHU SEEDS. {t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
