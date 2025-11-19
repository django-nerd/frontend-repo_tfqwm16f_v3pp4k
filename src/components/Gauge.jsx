import React from 'react'

function Gauge({ value = 72 }) {
  const size = 140
  const stroke = 12
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(Math.max(value, 0), 100)
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e2e8f0"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gc)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 rotate-90 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-light text-slate-900">{value}</div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Health Score</div>
        </div>
      </div>
    </div>
  )
}

export default Gauge
