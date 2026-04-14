import type { Metadata } from 'next'
import { ContactPageClient } from './client'

export const metadata: Metadata = {
  title: 'Contact & Get Involved | B-Side BBQ Bible Study',
  description:
    'Get involved with B-Side BBQ Bible Study at Mission Beach, San Diego. Volunteer, lead a study, host events, or join our men\'s group. Contact us today.',
  openGraph: {
    title: 'Contact & Get Involved | B-Side BBQ Bible Study',
    description:
      'Get involved with B-Side BBQ Bible Study at Mission Beach, San Diego. Volunteer, lead a study, host events, or join our community.',
    type: 'website',
    locale: 'en_US',
    siteName: 'B-Side BBQ Bible Study',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
