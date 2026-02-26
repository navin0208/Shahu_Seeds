import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { LanguageProvider } from '@/context/language-context'


const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SHAHU SEEDS - Premium Onion Seeds',
  description: 'Redefining onion seed performance through research-driven innovation. Quality seeds for modern agriculture.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
