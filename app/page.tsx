import { SignupForm } from './signup-form'
import { AnimatedSection } from './components/animated-section'

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
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-gradient-to-br from-ocean-700 via-ocean-500 to-ocean-300 px-6 text-center text-white">
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
      <AnimatedSection className="bg-sand-100 px-6 py-20">
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
      <AnimatedSection className="bg-white px-6 py-20">
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
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            God is Great Playlist
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            The soundtrack to our gatherings. Worship, vibes, and good energy.
          </p>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-lg">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="God is Great Playlist"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Get Involved */}
      <AnimatedSection className="bg-white px-6 py-20">
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
      <AnimatedSection className="bg-ocean-700 px-6 py-20 text-white">
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

      {/* Gallery placeholder */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Gallery
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Scenes from past gatherings
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {['🌅 Sunset worship', '🔥 Fire pit talks', '🍖 BBQ time', '📖 Bible study', '🏖️ Beach fellowship', '🙏 Prayer circle'].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-300 to-ocean-500 p-4 text-center text-white shadow-md"
                >
                  <span className="text-lg font-medium">{item}</span>
                </div>
              )
            )}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Photo gallery coming soon — follow us for updates!
          </p>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-sand-200 px-6 py-12 text-center text-gray-600">
        <p className="font-serif text-lg font-semibold text-ocean-700">
          B-Side BBQ Bible Study
        </p>
        <p className="mt-2">3381 Oceanfront Walk · Mission Beach, San Diego, CA</p>
        <p className="mt-1 text-sm">
          Wednesdays 6 PM · Men&apos;s Group Thursdays 7:30 PM
        </p>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} B-Side BBQ Bible Study. All rights
          reserved.
        </p>
      </footer>
    </main>
  )
}
