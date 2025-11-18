import React from 'react'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Partners from './components/Partners'
import DashboardBackdrop from './components/DashboardBackdrop'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero with Spline background */}
      <Hero />

      {/* Ticker */}
      <Ticker />

      {/* Partners showcase */}
      <Partners />

      {/* Data/Capabilities preview */}
      <DashboardBackdrop />

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© 2077 Arasaka-Miller Legal. All rights reserved.</div>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>Regulatory Warfare</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Cyber-Finance</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Corporate Defense</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
