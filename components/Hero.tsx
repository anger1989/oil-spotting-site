'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="emblem-glitch relative inline-block">
              <img 
                src="/images/emblem.png" 
                alt="Oil Spotting" 
                className="h-32 md:h-48 lg:h-64 w-auto object-contain relative z-10"
              />
              <img 
                src="/images/emblem.png" 
                alt="" 
                className="h-32 md:h-48 lg:h-64 w-auto object-contain absolute top-0 left-0 z-0 opacity-0"
                aria-hidden="true"
              />
              <img 
                src="/images/emblem.png" 
                alt="" 
                className="h-32 md:h-48 lg:h-64 w-auto object-contain absolute top-0 left-0 z-0 opacity-0"
                aria-hidden="true"
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-4 font-normal"
          >
            Cosmic music for journeys through the universe
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
          >
            {['Synthwave', 'Deep House', 'Rock', 'Cosmic Space'].map((genre, index) => (
              <motion.span
                key={genre}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="futuristic-tag text-sm font-medium text-white relative z-10 uppercase tracking-wider"
                data-text={genre}
              >
                <span className="relative z-10">{genre}</span>
                <span className="inner-border"></span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

