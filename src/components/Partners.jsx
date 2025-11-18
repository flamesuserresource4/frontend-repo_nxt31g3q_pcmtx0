import React from 'react'
import { motion } from 'framer-motion'

export default function Partners() {
  const partners = [
    { name: 'Kenji Arasaka', role: 'Senior Partner • Strategic Litigation', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c59360?q=80&w=1600&auto=format&fit=crop', cyber: ['Chrome Right Hand', 'Ocular Augment v4'], align: 'left' },
    { name: 'Evelyn Miller', role: 'Senior Partner • Cyber-Finance', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop', cyber: ['Temple I/O Ports', 'Neural Risk Core'], align: 'center' },
    { name: 'Dante Kovacs', role: 'Senior Partner • Corporate Offense', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop', cyber: ['Reinforced Spine', 'Ocular Lidar'], align: 'right' },
  ]

  return (
    <section id="partners" className="relative bg-[#0a0a0b] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_20%_at_50%_0%,rgba(106,214,255,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Senior Partners</h2>
          <p className="text-white/60 max-w-2xl mt-2">Ruthless elegance. Surgical precision. Each partner leads a vertical engineered around decisive outcomes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover object-center grayscale-[20%] contrast-125 group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-[#6AD6FF] text-xs font-mono mb-3">{p.cyber[0]} • {p.cyber[1]}</div>
                <h3 className="text-white text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>{p.name}</h3>
                <p className="text-white/70 text-sm">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
