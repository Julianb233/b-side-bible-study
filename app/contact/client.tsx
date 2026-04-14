'use client'

import { useState } from 'react'
import { AnimatedSection } from '../components/animated-section'
import Link from 'next/link'

const INVOLVEMENT_OPTIONS = [
  {
    icon: '🙌',
    title: 'Volunteer',
    desc: 'Help with grilling, setup, teardown, or welcoming newcomers. Every hand matters and every contribution builds the community.',
  },
  {
    icon: '📖',
    title: 'Lead a Study',
    desc: 'Have a passage on your heart? Step up and lead a group through it. No seminary degree required — just authenticity.',
  },
  {
    icon: '🏠',
    title: 'Host an Event',
    desc: 'Got a backyard, rooftop, or beach spot? Host a B-Side gathering at your place and bring the crew together.',
  },
  {
    icon: '🍖',
    title: 'Grill Master',
    desc: 'Know your way around a smoker or grill? Bring your skills and help feed the crew. We supply the meat — you bring the heat.',
  },
  {
    icon: '🎵',
    title: 'Worship & Music',
    desc: 'Play guitar, sing, or just vibe? Help set the atmosphere with worship music during our gatherings.',
  },
  {
    icon: '📸',
    title: 'Media & Outreach',
    desc: 'Help us spread the word. Capture photos, manage social media, or invite friends to experience B-Side.',
  },
]

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-gradient-to-br from-ocean-700 via-ocean-500 to-ocean-300 px-6 text-center text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-ocean-100 transition hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight md:text-6xl">
            Get Involved
          </h1>
          <p className="text-xl text-ocean-100 md:text-2xl">
            B-Side is what you make it. Find your place in the crew.
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

      {/* Ways to Get Involved */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Ways to Serve
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            There&apos;s no spectators at B-Side. Jump in wherever you feel called.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INVOLVEMENT_OPTIONS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-md transition hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-ocean-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Men's Group */}
      <AnimatedSection className="bg-ocean-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                Men&apos;s Group
              </h2>
              <p className="mb-4 text-lg text-ocean-100">
                Every Thursday at 7:30 PM. A smaller circle for deeper conversations,
                accountability, and brotherhood. No agenda — just honest men sharpening
                each other.
              </p>
              <p className="mb-6 text-ocean-100">
                Whether you&apos;re navigating career challenges, relationships, faith
                questions, or just need a crew that keeps it real — this is your spot.
              </p>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
                <span className="text-2xl">📅</span>
                <span className="font-semibold">Thursdays &middot; 7:30 PM &middot; Mission Beach</span>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-white/10 p-12 text-center backdrop-blur-sm">
              <div>
                <div className="mb-4 text-6xl">💪</div>
                <h3 className="mb-3 text-2xl font-bold">Iron Sharpens Iron</h3>
                <p className="text-white/80">
                  &ldquo;As iron sharpens iron, so one person sharpens another.&rdquo;
                </p>
                <p className="mt-2 text-sm text-ocean-200">— Proverbs 27:17</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Community Links */}
      <AnimatedSection className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Stay Connected
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            Join our community channels and never miss a gathering.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <a
              href="https://t.me/+GAtdULDkDcRhYjRh"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-ocean-100 p-8 transition hover:border-ocean-300 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-12 w-12 text-ocean-500 transition group-hover:text-ocean-700">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-ocean-700">Telegram</h3>
              <p className="text-gray-600">
                Join the group chat for updates, prayer requests, and community.
              </p>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-ocean-100 p-8 transition hover:border-ocean-300 hover:shadow-md"
            >
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-ocean-500 transition group-hover:text-ocean-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-ocean-700">Instagram</h3>
              <p className="text-gray-600">
                Follow us for photos, stories, and highlights from our gatherings.
              </p>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-ocean-100 p-8 transition hover:border-ocean-300 hover:shadow-md"
            >
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-ocean-500 transition group-hover:text-ocean-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-ocean-700">YouTube</h3>
              <p className="text-gray-600">
                Watch past studies, worship sessions, and community highlights.
              </p>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form + Location */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
                Send Us a Message
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Questions? Want to get plugged in? Drop us a line.
              </p>
              {submitted ? (
                <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                  <div className="mb-4 text-5xl">🙏</div>
                  <h3 className="mb-2 text-xl font-bold text-ocean-700">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-drift-600">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-drift-700 transition focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-drift-600">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-drift-700 transition focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-drift-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-drift-700 transition focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 focus:outline-none resize-none"
                      placeholder="How can we help? Want to volunteer, lead a study, or just say hey?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-sunset-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-sunset-600 hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Location & Directions */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
                Find Us
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                We meet on the sand at Mission Beach, San Diego.
              </p>
              <div className="mb-6 rounded-2xl bg-white p-6 shadow-md">
                <div className="mb-4 flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold text-ocean-700">3381 Oceanfront Walk</p>
                    <p className="text-gray-600">Mission Beach, San Diego, CA 92109</p>
                  </div>
                </div>
                <div className="mb-4 flex items-start gap-3">
                  <span className="text-2xl">🕕</span>
                  <div>
                    <p className="font-bold text-ocean-700">Every Wednesday at 6:00 PM</p>
                    <p className="text-gray-600">Bible Study &middot; BBQ &middot; Fellowship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🅿️</span>
                  <div>
                    <p className="font-bold text-ocean-700">Parking</p>
                    <p className="text-gray-600">
                      Street parking available along Mission Blvd and surrounding streets.
                      Belmont Park lot nearby for overflow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.5!2d-117.2527!3d32.7697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ2JzEwLjkiTiAxMTfCsDE1JzA5LjciVw!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="B-Side BBQ Bible Study location — Mission Beach"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-drift-700 px-6 py-12 text-center text-sand-300">
        <p className="font-serif text-xl font-bold text-white">B-Side BBQ Bible Study</p>
        <p className="mt-2 text-sand-400">3381 Oceanfront Walk &middot; Mission Beach, San Diego, CA</p>
        <div className="mt-4">
          <Link href="/" className="text-sm text-ocean-300 transition hover:text-white">
            &larr; Back to Home
          </Link>
        </div>
        <p className="mt-6 text-sm text-drift-400">
          &copy; {new Date().getFullYear()} B-Side BBQ Bible Study. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
