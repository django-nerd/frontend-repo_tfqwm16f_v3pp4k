import React from 'react'

function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/20 ring-1 ring-white/40 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3c-3 4-1 6 1.5 8.5S16 17 12 21c5-1 9-6 9-11.5C21 6 18 3 12 3Z" fill="url(#g)"/>
          <defs>
            <linearGradient id="g" x1="12" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399"/>
              <stop offset="1" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-[15px] tracking-tight font-semibold text-slate-900">VitalCode™</div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">AI Health Coach</div>
      </div>
    </div>
  )
}

export default Logo
