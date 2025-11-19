import React from 'react'
import Spline from '@splinetool/react-spline'
import Logo from './Logo'

function HeroCover() {
  return (
    <section className="relative h-[36rem] w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/90 pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto pt-10 px-6">
        <Logo className="mb-6" />
        <h1 className="text-white/95 text-4xl font-light tracking-tight mb-3">VitalCode™ – AI Health Coach</h1>
        <p className="text-sky-100/90 text-base leading-relaxed">Powered by AI Bio-Scan Technology to decode your biomarkers and guide you to better habits, nutrition and recovery – all in one clean, premium experience.</p>
      </div>
    </section>
  )
}

export default HeroCover
