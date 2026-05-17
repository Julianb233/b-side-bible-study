import { Metadata } from 'next'
import { AnimatedSection } from '../components/animated-section'
import { Navigation } from '../components/navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | B-Side BBQ Bible Study',
  description:
    'Learn about B-Side BBQ Bible Study — a weekly beach gathering in Mission Beach, San Diego. Our mission, our story, and the crew behind the grill.',
  openGraph: {
    title: 'About B-Side BBQ Bible Study',
    description:
      'A weekly beach gathering in Mission Beach, San Diego — fellowship, food, and faith every Wednesday at 6 PM.',
    type: 'website',
  },
}

const TEAM = [
  {
    emoji: '🔥',
    name: 'The Grill Master',
    role: 'Head of BBQ',
    desc: 'Every week, rain or shine, the grill is fired up with ribs, burgers, and whatever else sounds good. The food is what brings people in — the fellowship is what keeps them.',
  },
  {
    emoji: '📖',
    name: 'The Study Leaders',
    role: 'Bible Study Facilitators',
    desc: 'No lectures, no sermons — just honest facilitators who guide real conversations about scripture. Questions are welcome. Doubts are welcome. Everyone is welcome.',
  },
  {
    emoji: '🤝',
    name: 'The Crew',
    role: 'Community & Volunteers',
    desc: 'Setup, teardown, welcoming newcomers, prayer — the crew makes B-Side run. These are the people who show up early and stay late because they believe in what we are building.',
  },
  {
    emoji: '🎵',
    name: 'The Worship Team',
    role: 'Music & Atmosphere',
    desc: 'Acoustic worship on the beach hits different. Our musicians set the tone with songs that move the soul while the sun goes down over the Pacific.',
  },
]

const VALUES = [
  {
    icon: '🌊',
    title: 'No Walls',
    desc: 'Church was never meant to be confined to a building. We gather on the sand, under the sky, where God already is.',
  },
  {
    icon: '🍖',
    title: 'No Pretense',
    desc: 'Come as you are. Board shorts, flip-flops, tattoos, doubts — all welcome. We are not here to perform. We are here to be real.',
  },
  {
    icon: '💬',
    title: 'No Judgment',
    desc: 'Whether you have been walking with God for 30 years or just showed up because you smelled the BBQ, you belong here.',
  },
  {
    icon: '🔥',
    title: 'No Agenda',
    desc: 'We are not trying to sell you anything or recruit you. Just good food, honest conversation, and a community that has your back.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-br from-ocean-700 via-ocean-500 to-ocean-300 px-6 pt-20 text-center text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 text-lg font-medium tracking-widest text-sunset-500 uppercase">
            Our Story
          </p>
          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight md:text-7xl">
            About B-Side
          </h1>
          <p className="mb-8 text-xl text-ocean-100 md:text-2xl">
            How a grill, a Bible, and a stretch of sand became something more.
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

      {/* Mission Statement */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            Our Mission
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
            B-Side BBQ Bible Study exists to create a space where anyone can experience
            authentic community, explore faith without pressure, and share a meal together.
            We believe the best conversations happen around a fire pit with a plate of food
            and the sound of waves in the background.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-ocean-100 px-6 py-3 text-ocean-700">
            <span className="text-2xl">📍</span>
            <span className="font-semibold">3381 Oceanfront Walk, Mission Beach, San Diego</span>
          </div>
        </div>
      </AnimatedSection>

      {/* The Story */}
      <AnimatedSection className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            How It Started
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                It started simple — a few friends, a portable grill, and a Bible on the beach.
                No marketing plan, no budget, no building. Just a feeling that church could
                look different.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Word spread the way it always does when something is real — person to person.
                Someone brought a friend. That friend brought their neighbor. Before long,
                Wednesday nights on Mission Beach became the highlight of the week for a
                growing crew of people who were hungry for more than just burgers.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Today, B-Side is a weekly gathering that feels more like a family dinner than
                a service. We study scripture, we eat well, and we do life together. The
                format is simple because the mission is simple: love people, feed people,
                point people toward something bigger.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-500 to-ocean-700 p-12 text-center text-white">
              <div>
                <div className="mb-4 text-6xl">🌅</div>
                <h3 className="mb-2 text-2xl font-bold">Every Wednesday</h3>
                <p className="text-lg text-ocean-100">
                  6:00 PM on the sand at Mission Beach.
                  <br />
                  Sunset views included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="bg-sand-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            What We Stand For
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            B-Side is built on a few non-negotiables that shape everything we do.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-8 text-left shadow-md transition hover:shadow-lg"
              >
                <div className="mb-3 text-3xl">{v.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-ocean-700">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
            The Crew
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            B-Side runs on volunteers who show up because they believe in the mission.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-ocean-100 p-8 text-left transition hover:border-ocean-300 hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{member.emoji}</div>
                <h3 className="mb-1 text-xl font-bold text-ocean-700">{member.name}</h3>
                <p className="mb-3 text-sm font-semibold text-sunset-500">{member.role}</p>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-ocean-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
            Come See for Yourself
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-ocean-100">
            The best way to understand B-Side is to show up. Grab a plate, find a seat,
            and see what happens when real people gather around real food and real faith.
          </p>
          <Link
            href="/events"
            className="inline-block rounded-full bg-sunset-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-sunset-600 hover:shadow-xl"
          >
            See Upcoming Events
          </Link>
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
