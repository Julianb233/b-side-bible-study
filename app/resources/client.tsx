'use client'

import { AnimatedSection } from '../components/animated-section'
import Link from 'next/link'

const RECOMMENDED_BOOKS = [
  {
    title: 'Mere Christianity',
    author: 'C.S. Lewis',
    desc: 'A timeless exploration of the core beliefs that unite Christians. Perfect for anyone asking the big questions.',
  },
  {
    title: 'The Pursuit of God',
    author: 'A.W. Tozer',
    desc: 'A classic call to deeper intimacy with God. Short, powerful, and hits different when you read it by the ocean.',
  },
  {
    title: 'Knowing God',
    author: 'J.I. Packer',
    desc: 'Goes beyond knowing about God to actually knowing Him. A foundational read for any believer.',
  },
  {
    title: 'Wild at Heart',
    author: 'John Eldredge',
    desc: 'Especially relevant for our men\'s group. Explores what it means to be a man created in God\'s image.',
  },
  {
    title: 'The Ragamuffin Gospel',
    author: 'Brennan Manning',
    desc: 'Grace for the broken, tired, and real. A book that reminds you God\'s love isn\'t something you earn.',
  },
  {
    title: 'Disciplines of a Godly Man',
    author: 'R. Kent Hughes',
    desc: 'Practical wisdom for men pursuing faithfulness in every area of life — relationships, purity, work, and worship.',
  },
]

const STUDY_GUIDES = [
  {
    icon: '📖',
    title: 'Gospel of John',
    desc: 'Our current study series. Follow along as we walk through the life of Jesus, chapter by chapter.',
    tag: 'Current Series',
  },
  {
    icon: '⛰️',
    title: 'Sermon on the Mount',
    desc: 'Matthew 5-7. Jesus\'s most famous teaching — unpacking what it means to live as citizens of His Kingdom.',
    tag: 'Upcoming',
  },
  {
    icon: '✉️',
    title: 'Letters of Paul',
    desc: 'Romans through Philemon. Practical theology for real life — faith, freedom, community, and purpose.',
    tag: 'Past Series',
  },
  {
    icon: '🦁',
    title: 'Book of Daniel',
    desc: 'Standing firm in a culture that pushes back. Relevant then, relevant now.',
    tag: 'Past Series',
  },
]

const DEVOTIONAL_LINKS = [
  {
    title: 'YouVersion Bible App',
    desc: 'Free Bible app with reading plans, audio, and daily verses. Start with a 7-day plan and build the habit.',
    url: 'https://www.bible.com/',
    icon: '📱',
  },
  {
    title: 'BibleProject',
    desc: 'Incredible animated videos that break down every book of the Bible. Visual learners, this is your jam.',
    url: 'https://bibleproject.com/',
    icon: '🎬',
  },
  {
    title: 'Blue Letter Bible',
    desc: 'Go deeper with original Greek and Hebrew word studies, commentaries, and cross-references.',
    url: 'https://www.blueletterbible.org/',
    icon: '🔍',
  },
  {
    title: 'The Bible in One Year',
    desc: 'Daily readings with commentary from Nicky Gumbel. A great way to read through the entire Bible.',
    url: 'https://www.bibleinoneyear.org/',
    icon: '📅',
  },
  {
    title: 'Desiring God',
    desc: 'Articles, sermons, and devotionals from John Piper. Solid theology that fuels worship.',
    url: 'https://www.desiringgod.org/',
    icon: '🔥',
  },
  {
    title: 'GotQuestions.org',
    desc: 'Got a tough question about the Bible? This site has clear, biblical answers to thousands of questions.',
    url: 'https://www.gotquestions.org/',
    icon: '❓',
  },
]

export function ResourcesPageClient() {
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
            Resources
          </h1>
          <p className="text-xl text-ocean-100 md:text-2xl">
            Tools to grow your faith — playlists, books, study guides, and more.
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

      {/* Playlist Section */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            God is Great Playlist
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            The soundtrack to our gatherings. Worship, vibes, and good energy.
            Hit play and let it set the tone.
          </p>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-lg">
            <iframe
              style={{ borderRadius: '12px', border: 0 }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
              width="100%"
              height="380"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="God is Great Playlist"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Study Guides */}
      <AnimatedSection className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Bible Study Guides
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            Follow along with our current and past study series.
            Each guide is designed for group discussion and personal reflection.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {STUDY_GUIDES.map((guide) => (
              <div
                key={guide.title}
                className="rounded-2xl border border-ocean-100 p-8 transition hover:border-ocean-300 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-3xl">{guide.icon}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      guide.tag === 'Current Series'
                        ? 'bg-sunset-500 text-white'
                        : guide.tag === 'Upcoming'
                          ? 'bg-ocean-100 text-ocean-700'
                          : 'bg-sand-200 text-drift-500'
                    }`}
                  >
                    {guide.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-ocean-700">{guide.title}</h3>
                <p className="text-gray-600">{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Recommended Reading */}
      <AnimatedSection className="bg-ocean-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold md:text-4xl">
            Recommended Reading
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-ocean-100">
            Books that have shaped our community. Pick one up and bring it to the next gathering —
            guaranteed someone else is reading it too.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RECOMMENDED_BOOKS.map((book) => (
              <div
                key={book.title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15"
              >
                <div className="mb-3 text-3xl">📚</div>
                <h3 className="mb-1 text-lg font-bold">{book.title}</h3>
                <p className="mb-3 text-sm font-medium text-ocean-200">by {book.author}</p>
                <p className="text-sm text-ocean-100">{book.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Devotional Content Links */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Devotional Resources
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            Daily tools to keep your faith sharp between gatherings.
            We use these ourselves — they&apos;re the real deal.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEVOTIONAL_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <div className="mb-3 text-3xl">{link.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-ocean-700 transition group-hover:text-sunset-600">
                  {link.title}
                  <svg
                    className="ml-1 inline-block h-4 w-4 opacity-0 transition group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="text-sm text-gray-600">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-gradient-to-br from-ocean-700 to-ocean-500 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Come Study With Us
          </h2>
          <p className="mb-8 text-lg text-ocean-100">
            Resources are great, but nothing beats opening the Bible together
            over a plate of BBQ on the beach.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#next-event"
              className="inline-block rounded-full bg-sunset-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-sunset-600 hover:shadow-xl"
            >
              Join the Next Gathering
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Get Involved
            </Link>
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
