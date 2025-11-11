'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TelegramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const YouTubeMusicIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16v7.68c0 .48-.16.8-.48 1.12-.32.32-.64.48-1.12.48-.48 0-.8-.16-1.12-.48-.32-.32-.48-.64-.48-1.12 0-.48.16-.8.48-1.12.32-.32.64-.48 1.12-.48.16 0 .32.04.48.08V9.6l-4.8 1.04v5.76c0 .48-.16.8-.48 1.12-.32.32-.64.48-1.12.48-.48 0-.8-.16-1.12-.48-.32-.32-.48-.64-.48-1.12 0-.48.16-.8.48-1.12.32-.32.64-.48 1.12-.48.16 0 .32.04.48.08V8.16h5.568z"/>
  </svg>
)

export default function Streaming() {
  return (
    <section id="streaming" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center"
        >
          Listen to Our Music
        </motion.h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <motion.a
            href="https://open.spotify.com/artist/2Mb89dzEbRSGfiBhqocisp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-4 transition-all"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/images/spotify.png"
                alt="Spotify"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <div className="text-lg font-semibold text-white">Spotify</div>
          </motion.a>
          <motion.a
            href="https://t.me/oilspotting"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-4 transition-all"
          >
            <div className="text-blue-400">
              <TelegramIcon />
            </div>
            <div className="text-lg font-semibold text-white">Telegram</div>
          </motion.a>
          <motion.a
            href="https://music.youtube.com/channel/UCwGyzG48NG07ddmCLGQ93Lg"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-4 transition-all"
          >
            <div className="text-red-500">
              <YouTubeMusicIcon />
            </div>
            <div className="text-lg font-semibold text-white flex flex-col items-center">
              <span>YouTube</span>
              <span>Music</span>
            </div>
          </motion.a>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/60 mt-12"
        >
          Stay tuned for updates and new releases
        </motion.p>
      </div>
    </section>
  )
}

