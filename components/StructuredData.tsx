'use client'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Oil Spotting',
    description: 'Oil Spotting - a music band in synthwave, deep house, rock and cosmic space genres. Cosmic music for journeys through the universe.',
    genre: ['Synthwave', 'Deep House', 'Rock', 'Cosmic Space'],
    url: typeof window !== 'undefined' ? window.location.origin : 'https://oilspotting.com',
    sameAs: [
      'https://open.spotify.com/artist/2Mb89dzEbRSGfiBhqocisp',
      'https://music.youtube.com/channel/UCwGyzG48NG07ddmCLGQ93Lg',
      'https://t.me/oilspotting',
    ],
    image: `${typeof window !== 'undefined' ? window.location.origin : 'https://oilspotting.com'}/images/emblem.png`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

