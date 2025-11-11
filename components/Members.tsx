'use client'

import { motion } from 'framer-motion'

const members = [
  {
    name: 'Alex Cosmos',
    role: 'Synthesizers, Programming',
    description: 'Creates cosmic soundscapes and atmospheric textures',
  },
  {
    name: 'Maria Star',
    role: 'Vocals, Lyrics',
    description: 'The voice that guides through galaxies and tells stories of distant worlds',
  },
  {
    name: 'Dmitry Neutron',
    role: 'Guitar, Bass',
    description: 'Creates powerful riffs and melodies that light the path through space',
  },
  {
    name: 'Ivan Pulsar',
    role: 'Drums, Production',
    description: 'Sets the rhythm of journeys and is responsible for the final sound of tracks',
  },
]

export default function Members() {
  return (
    <section id="members" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center"
        >
          Members
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-xl p-6 text-center transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-sm text-white/70 mb-3 font-medium">{member.role}</p>
              <p className="text-sm text-white/60">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

