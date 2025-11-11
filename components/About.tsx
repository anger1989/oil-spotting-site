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
            We crafting a unique sound at the intersection of synthwave, deep house, rock, and cosmic music. We turn sound into an interstellar journey, where every track tells a story from another universe.
            </p>
            <p>
            Our music isn’t just something to listen to — it’s a portal to uncharted worlds. Deep basslines guide you through nebulae, shimmering synths paint distant planets, and powerful guitar riffs light the way toward new horizons.
            </p>
            Inspired by the infinite vastness of space, we channel its mystery, energy, and emotion into sonic landscapes that make your heart race and your mind drift beyond the ordinary.
            <p>
            Oil Spotting isn’t just a genre — it’s a feeling.
            </p>
          
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

