export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-br from-ocean-700 via-ocean-500 to-ocean-300 px-6 text-center text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight md:text-7xl">
            B-Side BBQ Bible Study
          </h1>
          <p className="mb-8 text-xl text-ocean-100 md:text-2xl">
            Fellowship, food, and faith — every week in Mission Beach, San Diego.
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
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-6 font-serif text-3xl font-bold text-ocean-700 md:text-4xl">
          What We&apos;re About
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
          B-Side is a laid-back weekly gathering where good BBQ meets great
          conversation. We dig into scripture together, share a meal, and build
          real community — no pretense, no pressure. Everyone&apos;s welcome,
          whether you&apos;ve been studying the Bible for decades or picking it up
          for the first time.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            { icon: '🔥', title: 'BBQ', desc: 'Real food, grilled fresh every session.' },
            { icon: '📖', title: 'Bible Study', desc: 'Honest conversations about faith and life.' },
            { icon: '🤝', title: 'Community', desc: 'A crew that shows up for each other.' },
          ].map((item) => (
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
      </section>

      {/* Next Event */}
      <section
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
              San Diego, CA · Exact location shared on signup
            </p>
          </div>
          <form
            className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border-0 bg-white/20 px-6 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sunset-500"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-sunset-500 px-8 py-3 font-semibold text-white transition hover:bg-sunset-600"
            >
              Sign Me Up
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sand-200 px-6 py-12 text-center text-gray-600">
        <p className="font-serif text-lg font-semibold text-ocean-700">
          B-Side BBQ Bible Study
        </p>
        <p className="mt-2">Mission Beach, San Diego, CA</p>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} B-Side BBQ Bible Study. All rights
          reserved.
        </p>
      </footer>
    </main>
  )
}
