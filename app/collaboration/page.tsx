'use client'

import Navigation from '@/components/Navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { trackContact } from '@/lib/analytics'

export default function CollaborationPage() {
  return (
    <main className="min-h-screen cosmic-bg">
      <div className="relative z-10">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  Collaboration
                </h1>
                <p className="text-white/60 text-lg">
                  Let's create something cosmic together
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Email Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Email</h2>
                  </div>
                  <a
                    href="mailto:official@oil-spotting.com"
                    onClick={() => trackContact('email')}
                    className="text-xl text-white/80 hover:text-white transition-colors break-all"
                  >
                    official@oil-spotting.com
                  </a>
                </motion.div>

                {/* Telegram Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Telegram</h2>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-64 h-64 bg-white rounded-2xl p-4 flex items-center justify-center">
                      <Image
                        src="/images/qr.png"
                        alt="Telegram QR Code"
                        width={256}
                        height={256}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="text-white/60 text-center">
                      Scan to join our Telegram channel
                    </p>
                    <a
                      href="https://t.me/oilspotting"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackContact('telegram')}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      @oilspotting
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
