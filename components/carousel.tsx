'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function Carousel({ children, autoPlay = true, autoPlayInterval = 5000 }: CarouselProps) {
  const { lang } = useLanguage()
  const tr = (en: string, mr: string) => (lang === 'mr' ? mr : en)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % children.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, children.length])

  const prev = () => setCurrent((prev) => (prev - 1 + children.length) % children.length)
  const next = () => setCurrent((prev) => (prev + 1) % children.length)

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white">
        {/* Items */}
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label={tr('Previous slide', 'मागील स्लाइड')}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label={tr('Next slide', 'पुढील स्लाइड')}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-primary w-8' : 'bg-border w-2'
            }`}
            aria-label={`${tr('Go to slide', 'या स्लाइडवर जा')} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
