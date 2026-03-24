'use client'

export function SignupForm() {
  return (
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
  )
}
