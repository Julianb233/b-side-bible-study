import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body className="bg-sand-100 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
