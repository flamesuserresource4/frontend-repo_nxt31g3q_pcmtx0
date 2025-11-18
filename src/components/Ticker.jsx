import React, { useEffect, useRef } from 'react'

const sample = [
  { s: 'ARSK', p: 1842.12, d: +2.14 },
  { s: 'MLR', p: 972.33, d: -0.86 },
  { s: 'NEO', p: 420.69, d: +5.02 },
  { s: 'ZAI', p: 112.54, d: +0.44 },
  { s: 'OMNI', p: 2033.9, d: -1.22 },
  { s: 'KZK', p: 77.13, d: +3.77 },
]

export default function Ticker() {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const animate = () => {
      el.animate([
        { transform: 'translateX(0%)' },
        { transform: 'translateX(-50%)' },
      ], {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear'
      })
    }
    animate()
  }, [])

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div aria-hidden className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
      <div className="flex gap-12 py-3 whitespace-nowrap will-change-transform" ref={trackRef}>
        {[...sample, ...sample, ...sample].map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="text-white/60 font-mono">{t.s}</span>
            <span className="text-white font-mono">{t.p.toFixed(2)}</span>
            <span className={`font-mono ${t.d >= 0 ? 'text-[#6AD6FF]' : 'text-[#F87171]'}`}>{t.d >= 0 ? '+' : ''}{t.d.toFixed(2)}%</span>
            <span className="mx-4 h-3 w-px bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}
