'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#bbq', label: 'BBQ' },
  { href: '#next-event', label: 'Next Event' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#get-involved', label: 'Get Involved' },
  { href: '#mens-group', label: "Men's Group" },
  { href: '#gallery', label: 'Gallery' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)

    // Find active section
    const sections = NAV_LINKS.map((link) => link.href.slice(1))
    let current = ''
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) {
          current = id
        }
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setIsOpen(false)
          }}
          className={`font-serif text-xl font-bold transition-colors ${
            scrolled ? 'text-ocean-700' : 'text-white'
          }`}
        >
          B-Side BBQ
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? scrolled
                    ? 'bg-ocean-100 text-ocean-700'
                    : 'bg-white/20 text-white'
                  : scrolled
                    ? 'text-drift-500 hover:text-ocean-700'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-lg p-2 transition-colors md:hidden ${
            scrolled
              ? 'text-ocean-700 hover:bg-ocean-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 bg-ocean-900/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Close button inside overlay */}
        <div className="flex justify-end px-6 py-3">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-white hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 px-6 pt-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsOpen(false)
            }}
            className="mb-6 font-serif text-2xl font-bold text-white"
          >
            B-Side BBQ Bible Study
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`w-full max-w-xs rounded-xl px-6 py-3 text-center text-lg font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? 'bg-sunset-500 text-white'
                  : 'text-ocean-100 hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
