import { Navigation } from "../components/navigation"

const groups = [
  { title: "Weekly Bible Study", detail: "Join the main teaching thread for discussion prompts, recap notes, and practical next steps." },
  { title: "Prayer Circle", detail: "Share prayer requests and celebrate answered prayers with a trusted, encouraging community." },
  { title: "Serve Together", detail: "Coordinate outreach, giving-back initiatives, and volunteer opportunities as they open." },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Navigation />
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">B-Side Community</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Grow with people who want faith to become lived practice.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          B-Side is designed around conversation, accountability, and service — not just consuming another message.
          Use this page as the home base for the groups and rhythms that keep the study active between gatherings.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
              <h2 className="text-xl font-semibold text-amber-200">{group.title}</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{group.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
