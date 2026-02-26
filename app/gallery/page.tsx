'use client'

import { useLanguage } from '@/context/language-context'

type GalleryItem = {
  type: 'image' | 'video'
  src: string
}

export default function GalleryPage() {
  const { lang } = useLanguage()

  // Add your media files here (place files inside /public).
  const galleryItems: GalleryItem[] = [
    { type: 'image', src: '/gl1.jpeg' },
    { type: 'image',  src: '/sgl2.jpeg' },
    { type: 'image',  src: '/sgl3.jpeg'  },
    { type: 'image', src: '/sgl4.jpeg'  },
    { type: 'image',  src: '/sgl5.jpeg'  },
    { type: 'image',  src: '/sgl6.jpeg'  },
    { type: 'image',  src: '/sgl7.jpeg'  },
    // Example video entries:
    // { type: 'video', src: '/videos/farm-1.mp4' },
    // { type: 'video', src: '/videos/farm-2.mp4' },
  ]

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          {lang === 'mr' ? 'गॅलरी' : 'Gallery'}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-64 object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-64 object-cover bg-black"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
