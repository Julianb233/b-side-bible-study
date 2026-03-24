import { SignupForm } from './signup-form'
import { AnimatedSection } from './components/animated-section'
import { Navigation } from './components/navigation'
import { Gallery } from './components/gallery'

const PILLARS = [
  { icon: '🔥', title: 'BBQ', desc: 'Real food, grilled fresh every session. Ribs, burgers, and sides — because fellowship is better with a full plate.' },
  { icon: '📖', title: 'Bible Study', desc: 'Honest conversations about faith and life. No judgment, no pressure — just real talk about what matters.' },
  { icon: '🤝', title: 'Community', desc: 'A crew that shows up for each other. From the beach to the fire pit, we do life together.' },
]

const WAYS_TO_JOIN = [
  { title: 'Attend a Gathering', desc: 'Show up any Wednesday at 6 PM. Bring yourself — we handle the rest.', icon: '🌊' },
  { title: 'Volunteer', desc: 'Help with grilling, setup, or leading a study group. Every hand matters.', icon: '🙌' },
  { title: 'Host a Session', desc: 'Got a spot with a view? Host a B-Side at your place.', icon: '🏠' },
  { title: "Join Men's Group", desc: 'Thursdays at 7:30 PM. Deeper conversations, stronger bonds.', icon: '💪' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center bg-gradient-to-br from-ocean-700 via-ocean-500 to-ocean-300 px-6 text-center text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 text-lg font-medium tracking-widest text-sunset-500 uppercase">
            Mission Beach, San Diego
          </p>
          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight md:text-7xl">
            B-Side BBQ Bible Study
          </h1>
          <p className="mb-8 text-xl text-ocean-100 md:text-2xl">
            Fellowship, food, and faith — every week on the beach.
            Ocean waves, fire pits, and conversations that matter.
          </p>
          <a
            href="#next-event"
            className="inline-block rounded-full bg-sunset-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-sunset-600 hover:shadow-xl"
          >
            Join the Next Gathering
          </a>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="block w-full" preserveAspectRatio="none">
            <path
              d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
              className="fill-sand-100"
            />
          </svg>
        </div>
      </section>

      {/* About */}
      <AnimatedSection id="about" className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            What We&apos;re About
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
            B-Side is a laid-back weekly gathering where good BBQ meets great
            conversation. We dig into scripture together, share a meal, and build
            real community right on the sand at 3381 Oceanfront Walk. No pretense,
            no pressure. Everyone&apos;s welcome, whether you&apos;ve been studying
            the Bible for decades or picking it up for the first time.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {PILLARS.map((item) => (
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

      {/* BBQ Experience */}
      <AnimatedSection id="bbq" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            The B-Side BBQ Experience
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Picture this: the sun setting over Mission Beach, waves crashing nearby,
                the smell of smoked ribs and burgers on the grill. That&apos;s a typical
                Wednesday at B-Side.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                We gather around the fire pit, plates full, Bibles open, and have the
                kind of conversations that stick with you all week. It&apos;s church the
                way it was meant to be — raw, real, and around a table.
              </p>
              <p className="text-lg font-semibold text-sunset-600">
                Every Wednesday · 6:00 PM · Bring your appetite
              </p>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-sunset-500 to-sunset-600 p-12 text-center text-white">
              <div>
                <div className="mb-4 text-6xl">🍖</div>
                <h3 className="mb-2 text-2xl font-bold">Smoked & Grilled</h3>
                <p className="text-white/80">
                  Ribs, burgers, chicken, sides — and always enough for seconds.
                  Bring a friend (or three).
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Next Event */}
      <AnimatedSection
        id="next-event"
        className="bg-ocean-700 px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
            Next Gathering
          </h2>
          <div className="mb-8 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <p className="mb-2 text-lg font-semibold text-sunset-500">
              Every Wednesday
            </p>
            <p className="text-2xl font-bold">6:00 PM — Mission Beach</p>
            <p className="mt-2 text-ocean-100">
              3381 Oceanfront Walk, San Diego, CA
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-ocean-100">
              <div>
                <div className="text-2xl">🍔</div>
                <p>Free BBQ</p>
              </div>
              <div>
                <div className="text-2xl">📖</div>
                <p>Bible Study</p>
              </div>
              <div>
                <div className="text-2xl">🌅</div>
                <p>Beach Vibes</p>
              </div>
            </div>
          </div>
          <p className="mb-4 text-ocean-100">
            Drop your email and we&apos;ll send you the details
          </p>
          <SignupForm />
        </div>
      </AnimatedSection>

      {/* God is Great Playlist */}
      <AnimatedSection id="playlist" className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            God is Great Playlist
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            The soundtrack to our gatherings. Worship, vibes, and good energy.
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

      {/* Get Involved */}
      <AnimatedSection id="get-involved" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Get Involved
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            B-Side is what you make it. Here&apos;s how you can be part of the crew.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {WAYS_TO_JOIN.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ocean-100 p-8 text-left transition hover:border-ocean-300 hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-ocean-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Men's Group */}
      <AnimatedSection id="mens-group" className="bg-ocean-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
            Men&apos;s Group
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-ocean-100">
            Every Thursday at 7:30 PM. A smaller circle for deeper conversations,
            accountability, and brotherhood. No agenda — just honest men sharpening
            each other.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="text-2xl">📅</span>
            <span className="font-semibold">Thursdays · 7:30 PM · Mission Beach</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery */}
      <AnimatedSection id="gallery" className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Gallery
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Scenes from past gatherings
          </p>
          <Gallery />
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-drift-700 px-6 py-16 text-sand-200">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Info */}
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl font-bold text-white">
                B-Side BBQ Bible Study
              </p>
              <p className="mt-3 text-sand-300">
                3381 Oceanfront Walk · Mission Beach, San Diego, CA
              </p>
              <p className="mt-1 text-sm text-sand-400">
                Wednesdays 6 PM · Men&apos;s Group Thursdays 7:30 PM
              </p>
              {/* Social Links */}
              <div className="mt-6 flex justify-center gap-4 md:justify-start">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-3 text-white transition hover:bg-sunset-500"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-3 text-white transition hover:bg-sunset-500"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            {/* Map */}
            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.5!2d-117.2527!3d32.7697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ2JzEwLjkiTiAxMTfCsDE1JzA5LjciVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B-Side BBQ Bible Study location"
              />
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-drift-400">
            &copy; {new Date().getFullYear()} B-Side BBQ Bible Study. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
