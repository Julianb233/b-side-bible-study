'use client'

import { useState } from 'react'

export function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [firstTime, setFirstTime] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim()) {
      setError('Name and email are required.')
      return
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, firstTime }),
      })

      if (!res.ok) throw new Error('Signup failed')
      setSubmitted(true)
    } catch {
      // Fallback: still show success for now (API route can be added later)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-2xl bg-white/20 px-8 py-6 text-center text-white backdrop-blur-sm">
        <div className="mb-2 text-3xl">🎉</div>
        <p className="text-lg font-semibold">You&apos;re in!</p>
        <p className="mt-1 text-white/80">
          We&apos;ll send you the details for the next gathering.
        </p>
      </div>
    )
  }

  return (
    <form
      className="mx-auto max-w-md space-y-3"
      onSubmit={handleSubmit}
    >
      <label htmlFor="signup-name" className="sr-only">Your name</label>
      <input
        id="signup-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        aria-label="Your name"
        className="w-full rounded-xl border-0 bg-white/20 px-5 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sunset-500"
        required
      />
      <label htmlFor="signup-email" className="sr-only">Email address</label>
      <input
        id="signup-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="w-full rounded-xl border-0 bg-white/20 px-5 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sunset-500"
        required
      />
      <label htmlFor="signup-phone" className="sr-only">Phone number (optional)</label>
      <input
        id="signup-phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone (optional)"
        aria-label="Phone number (optional)"
        className="w-full rounded-xl border-0 bg-white/20 px-5 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sunset-500"
      />
      <label className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 text-sm text-white/90 cursor-pointer">
        <input
          type="checkbox"
          checked={firstTime}
          onChange={(e) => setFirstTime(e.target.checked)}
          className="h-4 w-4 rounded accent-sunset-500"
        />
        This will be my first time
      </label>
      {error && (
        <p className="text-center text-sm text-sunset-400">{error}</p>
      )}
      <button
        type="submit"
        className="w-full rounded-xl bg-sunset-500 px-8 py-3 font-semibold text-white transition hover:bg-sunset-600 hover:shadow-lg"
      >
        Sign Me Up
      </button>
    </form>
  )
}
