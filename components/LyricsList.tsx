'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Lyric {
  id: string
  name: string
  content: string
  spotifyUrl: string | null
}

interface LyricsListProps {
  lyrics: Lyric[]
}

export default function LyricsList({ lyrics }: LyricsListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  if (lyrics.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-white/60 text-lg">No lyrics available yet</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-4 mb-8">
        {lyrics.map((lyric, index) => (
          <motion.div
            key={lyric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <motion.button
              onClick={() => setSelectedId(selectedId === lyric.id ? null : lyric.id)}
              className="w-full text-left p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-white transition-colors flex-1">
                  {lyric.name}
                </h3>
                <div className="flex items-center gap-3">
                  {lyric.spotifyUrl && (
                    <motion.a
                      href={lyric.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="transition-opacity hover:opacity-80"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Listen on Spotify"
                    >
                      <Image
                        src="/images/spotify.png"
                        alt="Spotify"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </motion.a>
                  )}
                  <motion.div
                    animate={{ rotate: selectedId === lyric.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 group-hover:text-white/90"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.button>

            <AnimatePresence>
              {selectedId === lyric.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-4 border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                    <div className="text-white/80 leading-relaxed whitespace-pre-line font-light text-base md:text-lg">
                      {lyric.content.split('\n').map((line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className={line.trim() === '' ? 'mb-4' : 'mb-2'}
                        >
                          {line || '\u00A0'}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
