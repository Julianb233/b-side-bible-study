'use client'

import { useState, useCallback, useEffect } from 'react'

const GALLERY_ITEMS = [
  { emoji: '🌅', title: 'Sunset worship', color: 'from-sunset-500 to-sunset-600' },
  { emoji: '🔥', title: 'Fire pit talks', color: 'from-orange-400 to-red-500' },
  { emoji: '🍖', title: 'BBQ time', color: 'from-amber-400 to-orange-500' },
  { emoji: '📖', title: 'Bible study', color: 'from-ocean-500 to-ocean-700' },
  { emoji: '🏖️', title: 'Beach fellowship', color: 'from-ocean-300 to-ocean-500' },
  { emoji: '🙏', title: 'Prayer circle', color: 'from-purple-400 to-indigo-500' },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const close = useCallback(() => setSelectedIndex(null), [])

  const next = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i + 1) % GALLERY_ITEMS.length : null))
  }, [])

  const prev = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
    )
  }, [])

  useEffect(() => {
    if (selectedIndex === null) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, close, next, prev])

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            aria-label={`View ${item.title}`}
            className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} p-4 text-center text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg cursor-pointer`}
          >
            <div>
              <div className="text-4xl mb-2">{item.emoji}</div>
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Real photos coming soon — follow us for updates!
      </p>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery: ${GALLERY_ITEMS[selectedIndex].title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className={`relative flex aspect-square w-[80vw] max-w-lg items-center justify-center rounded-3xl bg-gradient-to-br ${GALLERY_ITEMS[selectedIndex].color} p-8 text-white shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-7xl mb-4">{GALLERY_ITEMS[selectedIndex].emoji}</div>
              <p className="text-2xl font-bold">{GALLERY_ITEMS[selectedIndex].title}</p>
            </div>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/40"
              aria-label="Previous"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/40"
              aria-label="Next"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/40"
              aria-label="Close lightbox"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            {selectedIndex + 1} / {GALLERY_ITEMS.length}
          </div>
        </div>
      )}
    </>
  )
}
