import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oil Spotting | Cosmic Synthwave Music',
  description: 'Oil Spotting - a music band in synthwave, deep house, rock and cosmic space genres. Cosmic music for journeys through the universe.',
  keywords: 'Oil Spotting, synthwave, deep house, rock, cosmic space, music, band',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

