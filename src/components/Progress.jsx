import React from 'react'

function Progress() {
  const history = [
    { date: '2025-02-03', score: 72 },
    { date: '2025-02-24', score: 78 },
    { date: '2025-03-17', score: 83 },
    { date: '2025-04-07', score: 86 },
  ]

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div>
          <h2 className="text-2xl font-light text-slate-900 mb-2">Progress & History</h2>
          <p className="text-slate-600">Your Health Score over time</p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4">
          <svg viewBox="0 0 300 120" className="w-full h-28">
            <polyline
              fill="none"
              stroke="url(#lg)"
              strokeWidth="3"
              points="0,80 100,70 200,50 300,40"
            />
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="space-y-3">
          {history.map(h => (
            <div key={h.date} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <div>
                <div className="text-slate-900 font-medium">Scan on {h.date}</div>
                <div className="text-slate-500 text-sm">Stable improvements</div>
              </div>
              <div className="text-emerald-600 font-semibold">{h.score}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-white p-4">
          <div className="font-medium">Metabolic Reset Achiever</div>
          <div className="text-white/90 text-sm">Great consistency across 30 days</div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 rounded-xl border border-slate-200 py-3">Export PDF</button>
          <button className="flex-1 rounded-xl bg-emerald-600 text-white py-3">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Progress
