import type { Metadata } from 'next'
import { ResourcesPageClient } from './client'

export const metadata: Metadata = {
  title: 'Resources | B-Side BBQ Bible Study',
  description:
    'Bible study resources, playlists, recommended reading, study guides, and devotional content from B-Side BBQ Bible Study at Mission Beach, San Diego.',
  openGraph: {
    title: 'Resources | B-Side BBQ Bible Study',
    description:
      'Bible study resources, playlists, recommended reading, and devotional content from B-Side BBQ Bible Study.',
    type: 'website',
    locale: 'en_US',
    siteName: 'B-Side BBQ Bible Study',
  },
}

export default function ResourcesPage() {
  return <ResourcesPageClient />
}
