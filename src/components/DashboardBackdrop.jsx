import React from 'react'

export default function DashboardBackdrop() {
  return (
    <div className="relative w-full bg-[#0a0a0b] py-16">
      {/* Glass cards */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-[#F5D76E]/10 to-[#6AD6FF]/10 pointer-events-none" />
            <div className="relative">
              <h4 className="text-white/80 font-serif text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>Market Intelligence {i}</h4>
              <p className="text-white/60 text-sm mt-2">Encrypted briefs across litigation vectors, risk heatmaps, and exposure deltas.</p>
              <div className="mt-5 h-28 w-full rounded-lg bg-gradient-to-b from-[#0e0f10] to-[#0b0c0d] border border-white/10 overflow-hidden">
                <div className="h-full w-full bg-[conic-gradient(at_50%_50%,#6AD6FF_0deg,#6AD6FF_120deg,transparent_120deg,transparent_360deg)] opacity-60" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
