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
  title: 'B-Side BBQ Bible Study | Mission Beach',
  description: 'Join us for fellowship, BBQ, and Bible study in Mission Beach, San Diego. Good food, great people, and meaningful conversations.',
  openGraph: {
    title: 'B-Side BBQ Bible Study',
    description: 'Fellowship, BBQ, and Bible study in Mission Beach, San Diego.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-sand-100 text-drift-700 antialiased">
        {children}
      </body>
    </html>
  )
}
