import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'B-Side BBQ Bible Study | Mission Beach, San Diego',
  description:
    'Join B-Side BBQ Bible Study for fellowship, food, and faith every Wednesday at 6 PM on Mission Beach, San Diego. Free BBQ, Bible study, and community.',
  keywords: [
    'Bible study',
    'Mission Beach',
    'San Diego',
    'BBQ',
    'fellowship',
    'community',
    'church',
    'mens group',
  ],
  openGraph: {
    title: 'B-Side BBQ Bible Study | Mission Beach',
    description:
      'Fellowship, BBQ, and Bible study every Wednesday at 6 PM on Mission Beach, San Diego.',
    type: 'website',
    locale: 'en_US',
    siteName: 'B-Side BBQ Bible Study',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B-Side BBQ Bible Study | Mission Beach',
    description:
      'Fellowship, BBQ, and Bible study every Wednesday at 6 PM on Mission Beach, San Diego.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bsidebbq.com',
  },
}

// JSON-LD structured data for the recurring event
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'B-Side BBQ Bible Study',
  description:
    'Weekly BBQ and Bible study gathering at Mission Beach, San Diego. Free food, fellowship, and meaningful conversations.',
  eventSchedule: {
    '@type': 'Schedule',
    byDay: 'https://schema.org/Wednesday',
    startTime: '18:00',
    scheduleTimezone: 'America/Los_Angeles',
    repeatFrequency: 'P1W',
  },
  location: {
    '@type': 'Place',
    name: 'Mission Beach',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3381 Oceanfront Walk',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      postalCode: '92109',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'B-Side BBQ Bible Study',
  },
  isAccessibleForFree: true,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-sand-100 text-drift-700 antialiased">
        <a href="#about" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
