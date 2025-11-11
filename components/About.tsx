'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/openart-image_S9OAD-dS_1762711038080_raw.png)',
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 border border-white/20 rounded-2xl" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 md:p-12"
          >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-8">
            About
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              <strong className="text-white">Oil Spotting</strong> is a music collective 
              creating unique sound at the intersection of synthwave, deep house, rock and cosmic music. 
              Our music is a journey through galaxies, where each track tells its own 
              cosmic story.
            </p>
            <p>
              We draw inspiration from the vast expanses of the universe, creating soundscapes 
              that transport listeners to distant worlds and unexplored spaces. Our music 
              combines the nostalgia of synthwave, the depth of deep house, the energy of rock 
              and the mystery of cosmic sounds.
            </p>
            <p>
              Each composition is a unique journey, where synthesizers create the atmosphere 
              of distant planets, bass lines lead through nebulae, and guitar riffs illuminate 
              the path to new horizons.
            </p>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

