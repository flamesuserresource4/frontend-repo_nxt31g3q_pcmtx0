import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-[#0a0a0b]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Carbon fiber + gradient overlays */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30" style={{
        backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 6px)`
      }} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0a0a0b]/40 via-[#0a0a0b]/20 to-[#0a0a0b]" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs tracking-[0.25em] uppercase rounded-full bg-white/5 border border-white/10 text-[#9fd7ff] backdrop-blur-md">Cyber-Finance Division</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-br from-[#F5D76E] via-[#F5D76E] to-[#6AD6FF] drop-shadow-[0_0_30px_rgba(106,214,255,0.2)]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Arasaka-Miller Legal
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            Elite counsel for high-net-worth entities operating at the edge of law and capital. Precision litigation. Aggressive compliance. Outcome engineering.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#partners" className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-[#F5D76E]/30 text-[#F5D76E] hover:border-[#F5D76E] hover:bg-[#F5D76E]/10 transition-colors backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#F5D76E] animate-pulse" />
              Meet Senior Partners
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-md">
              Explore Capabilities
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-[#0a0a0b] to-transparent" />
    </section>
  )
}
