'use client'

import { useState } from 'react'

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-full bg-white/20 px-6 py-3 text-center text-white backdrop-blur-sm">
        Thanks! We&apos;ll send you the details.
      </div>
    )
  }

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
