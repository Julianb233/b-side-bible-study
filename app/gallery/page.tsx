'use client'

import { useState } from 'react'
import { AnimatedSection } from '../components/animated-section'
import { Navigation } from '../components/navigation'
import { Gallery } from '../components/gallery'
import Link from 'next/link'

const CATEGORIES = [
  { key: 'all', label: 'All', icon: '📸' },
  { key: 'worship', label: 'Worship', icon: '🎵' },
  { key: 'bbq', label: 'BBQ', icon: '🍖' },
  { key: 'fellowship', label: 'Fellowship', icon: '🤝' },
  { key: 'beach', label: 'Beach', icon: '🏖️' },
]

const GALLERY_HIGHLIGHTS = [
  { emoji: '🌅', title: 'Golden hour worship', category: 'worship', color: 'from-sunset-500 to-sunset-600' },
  { emoji: '🔥', title: 'Fire pit conversations', category: 'fellowship', color: 'from-orange-400 to-red-500' },
  { emoji: '🍖', title: 'Ribs on the grill', category: 'bbq', color: 'from-amber-400 to-orange-500' },
  { emoji: '📖', title: 'Scripture on the sand', category: 'worship', color: 'from-ocean-500 to-ocean-700' },
  { emoji: '🏖️', title: 'Beach setup', category: 'beach', color: 'from-ocean-300 to-ocean-500' },
  { emoji: '🙏', title: 'Prayer circle at sunset', category: 'worship', color: 'from-purple-400 to-indigo-500' },
  { emoji: '🍔', title: 'Burgers for the crew', category: 'bbq', color: 'from-amber-500 to-amber-700' },
  { emoji: '🎸', title: 'Acoustic set', category: 'worship', color: 'from-indigo-400 to-purple-600' },
  { emoji: '🤙', title: 'The crew', category: 'fellowship', color: 'from-ocean-400 to-ocean-600' },
  { emoji: '🌊', title: 'Ocean views', category: 'beach', color: 'from-ocean-300 to-ocean-700' },
  { emoji: '🥩', title: 'Smoked brisket day', category: 'bbq', color: 'from-red-400 to-red-600' },
  { emoji: '👋', title: 'New faces welcome', category: 'fellowship', color: 'from-sunset-400 to-sunset-600' },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredItems = activeFilter === 'all'
    ? GALLERY_HIGHLIGHTS
    : GALLERY_HIGHLIGHTS.filter((item) => item.category === activeFilter)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-gradient-to-br from-ocean-700 via-ocean-500 to-ocean-300 px-6 pt-20 text-center text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 text-lg font-medium tracking-widest text-sunset-500 uppercase">
            Scenes from the Sand
          </p>
          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight md:text-7xl">
            Gallery
          </h1>
          <p className="mb-8 text-xl text-ocean-100 md:text-2xl">
            Moments from our gatherings — the food, the faith, the fellowship.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="block w-full" preserveAspectRatio="none">
            <path
              d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
              className="fill-sand-100"
            />
          </svg>
        </div>
      </section>

      {/* Category Filters */}
      <AnimatedSection className="bg-sand-100 px-6 pt-16 pb-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition cursor-pointer ${
                  activeFilter === cat.key
                    ? 'bg-ocean-700 text-white shadow-md'
                    : 'bg-white text-drift-500 hover:bg-ocean-100 hover:text-ocean-700'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Filtered Gallery Grid */}
      <AnimatedSection className="bg-sand-100 px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item, i) => (
              <div
                key={`${item.emoji}-${i}`}
                className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} p-4 text-center text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg`}
              >
                <div>
                  <div className="mb-2 text-4xl">{item.emoji}</div>
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <p className="mt-12 text-center text-lg text-gray-500">
              No items in this category yet. Check back soon!
            </p>
          )}
          <p className="mt-8 text-center text-sm text-gray-500">
            Real photos coming soon — follow us on Instagram for updates!
          </p>
        </div>
      </AnimatedSection>

      {/* Original Gallery Component */}
      <AnimatedSection className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Featured Moments
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            A selection of our favorite scenes from past gatherings.
          </p>
          <Gallery />
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-ocean-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
            Be Part of the Next Chapter
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-ocean-100">
            The best moments are the ones you are in. Come make some memories with us.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/events"
              className="inline-block rounded-full bg-sunset-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-sunset-600 hover:shadow-xl"
            >
              See Upcoming Events
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-drift-700 px-6 py-12 text-center text-sand-300">
        <p className="font-serif text-xl font-bold text-white">B-Side BBQ Bible Study</p>
        <p className="mt-2 text-sm text-sand-400">
          3381 Oceanfront Walk &middot; Mission Beach, San Diego, CA
        </p>
        <p className="mt-1 text-sm text-sand-400">
          Wednesdays 6 PM &middot; Men&apos;s Group Thursdays 7:30 PM
        </p>
        <p className="mt-6 text-sm text-drift-400">
          &copy; {new Date().getFullYear()} B-Side BBQ Bible Study. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
