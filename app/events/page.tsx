import { Metadata } from 'next'
import { AnimatedSection } from '../components/animated-section'
import { Navigation } from '../components/navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events | B-Side BBQ Bible Study',
  description:
    'Upcoming events at B-Side BBQ Bible Study — weekly Wednesday gatherings, special cookouts, and community events at Mission Beach, San Diego.',
  openGraph: {
    title: 'Events | B-Side BBQ Bible Study',
    description:
      'Weekly Wednesday gatherings at 6 PM on Mission Beach, San Diego. BBQ, Bible study, and community.',
    type: 'website',
  },
}

const UPCOMING_EVENTS = [
  {
    title: 'Wednesday BBQ Bible Study',
    date: 'Every Wednesday',
    time: '6:00 PM',
    location: '3381 Oceanfront Walk, Mission Beach',
    desc: 'Our weekly gathering — fire up the grill, open the Bible, and enjoy the sunset. Everyone is welcome. Bring a friend, bring your appetite.',
    icon: '🔥',
    recurring: true,
  },
  {
    title: "Men's Group",
    date: 'Every Thursday',
    time: '7:30 PM',
    location: 'Mission Beach',
    desc: 'A smaller circle for deeper conversations, accountability, and brotherhood. No agenda — just honest men sharpening each other.',
    icon: '💪',
    recurring: true,
  },
  {
    title: 'Summer Kickoff Cookout',
    date: 'Coming Soon',
    time: 'TBA',
    location: 'Mission Beach',
    desc: 'A bigger-than-usual gathering to kick off the summer season. Extra grills, extra food, extra community. Invite everyone you know.',
    icon: '☀️',
    recurring: false,
  },
  {
    title: 'Beach Baptism Day',
    date: 'Coming Soon',
    time: 'TBA',
    location: 'Mission Beach',
    desc: 'For anyone ready to take the next step in their faith. There is no better place to be baptized than right here in the Pacific.',
    icon: '🌊',
    recurring: false,
  },
]

const PAST_EVENTS = [
  {
    title: 'First B-Side Gathering',
    desc: 'A few friends, a portable grill, and a Bible. The one that started it all.',
    icon: '🌅',
  },
  {
    title: 'Thanksgiving Feast on the Beach',
    desc: 'Turkey, sides, and gratitude — Thanksgiving the B-Side way, right on the sand.',
    icon: '🦃',
  },
  {
    title: 'New Year Prayer Night',
    desc: 'We rang in the new year with worship around the fire pit and prayers for what is ahead.',
    icon: '🙏',
  },
  {
    title: 'Community Service Saturday',
    desc: 'The crew came together to serve our neighbors — beach cleanup and meal delivery to those in need.',
    icon: '🤲',
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-br from-ocean-700 via-ocean-500 to-ocean-300 px-6 pt-20 text-center text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 text-lg font-medium tracking-widest text-sunset-500 uppercase">
            Join Us
          </p>
          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight md:text-7xl">
            Events
          </h1>
          <p className="mb-8 text-xl text-ocean-100 md:text-2xl">
            Every week is an open invitation. Here is what is coming up.
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

      {/* Weekly Schedule Banner */}
      <AnimatedSection className="bg-sand-100 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-ocean-700 p-8 text-center text-white shadow-lg">
            <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl">
              Weekly Schedule
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl">🔥</div>
                <p className="text-lg font-bold">BBQ Bible Study</p>
                <p className="text-ocean-100">Every Wednesday at 6:00 PM</p>
                <p className="mt-1 text-sm text-ocean-200">Mission Beach</p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl">💪</div>
                <p className="text-lg font-bold">Men&apos;s Group</p>
                <p className="text-ocean-100">Every Thursday at 7:30 PM</p>
                <p className="mt-1 text-sm text-ocean-200">Mission Beach</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Upcoming Events */}
      <AnimatedSection className="bg-sand-100 px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Upcoming Events
          </h2>
          <div className="grid gap-6">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl bg-white p-8 shadow-md transition hover:shadow-lg"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-300 to-ocean-500 text-3xl">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-ocean-700">{event.title}</h3>
                      {event.recurring && (
                        <span className="rounded-full bg-ocean-100 px-3 py-1 text-xs font-semibold text-ocean-700">
                          Weekly
                        </span>
                      )}
                    </div>
                    <div className="mb-3 flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span>📅</span> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>🕕</span> {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>📍</span> {event.location}
                      </span>
                    </div>
                    <p className="text-gray-600">{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Location */}
      <AnimatedSection className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Where to Find Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-xl font-bold text-ocean-700">Mission Beach, San Diego</h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                We gather at 3381 Oceanfront Walk — right on the boardwalk with the ocean
                as our backdrop. Look for the grill smoke and the crew with Bibles out.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🅿️</span>
                  <p className="text-gray-600">
                    Street parking available along Mission Blvd. Arrive a little early
                    on busy summer evenings.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🚲</span>
                  <p className="text-gray-600">
                    Bike racks nearby. Riding to Bible study on the boardwalk is about
                    as San Diego as it gets.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🌡️</span>
                  <p className="text-gray-600">
                    Bring a hoodie — beach evenings cool down fast, especially in winter
                    months.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.5!2d-117.2527!3d32.7697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ2JzEwLjkiTiAxMTfCsDE1JzA5LjciVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B-Side BBQ Bible Study location"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Past Events */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Past Gatherings
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            A few highlights from gatherings past. Every week writes a new chapter.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {PAST_EVENTS.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-ocean-100 bg-white p-8 text-left transition hover:border-ocean-300 hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{event.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-ocean-700">{event.title}</h3>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-ocean-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
            Your Seat is Waiting
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-ocean-100">
            No RSVP needed. No tickets. Just show up, grab a plate, and join the
            conversation. We will save you a spot by the fire.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-block rounded-full bg-sunset-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-sunset-600 hover:shadow-xl"
            >
              Back to Home
            </Link>
            <a
              href="https://t.me/+GAtdULDkDcRhYjRh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Join Our Telegram
            </a>
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
