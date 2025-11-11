import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: {
    default: 'Oil Spotting | Cosmic Synthwave Music',
    template: '%s | Oil Spotting',
  },
  description: 'Oil Spotting - a music band in synthwave, deep house, rock and cosmic space genres. Cosmic music for journeys through the universe. Listen on Spotify, YouTube Music, and Telegram.',
  keywords: ['Oil Spotting', 'synthwave', 'deep house', 'rock', 'cosmic space', 'music', 'band', 'electronic music', 'space music', 'cosmic synthwave'],
  authors: [{ name: 'Oil Spotting' }],
  creator: 'Oil Spotting',
  publisher: 'Oil Spotting',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://oilspotting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Oil Spotting',
    title: 'Oil Spotting | Cosmic Synthwave Music',
    description: 'Oil Spotting - a music band in synthwave, deep house, rock and cosmic space genres. Cosmic music for journeys through the universe.',
    images: [
      {
        url: '/images/emblem.png',
        width: 2010,
        height: 1602,
        alt: 'Oil Spotting Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oil Spotting | Cosmic Synthwave Music',
    description: 'Oil Spotting - a music band in synthwave, deep house, rock and cosmic space genres.',
    images: ['/images/emblem.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/emblem.png',
    apple: '/images/emblem.png',
  },
  verification: {
    google: 'kEt1lQUuPeI4DZeGu51hmx-eEHAg0oM-LvQMWOLVO-4',
  },
  other: {
    'google-site-verification': 'kEt1lQUuPeI4DZeGu51hmx-eEHAg0oM-LvQMWOLVO-4',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

