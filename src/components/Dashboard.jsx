import React from 'react'
import { TrendingUp, ArrowRight, ShieldCheck, Flame, Activity, Zap, AlertTriangle, Calendar } from 'lucide-react'
import Gauge from './Gauge'

const biomarkerMeta = [
  { name: 'Immune System', color: 'from-emerald-400 to-green-500', icon: ShieldCheck },
  { name: 'Gut Health', color: 'from-cyan-400 to-sky-500', icon: Flame },
  { name: 'Stress & Hormones', color: 'from-amber-400 to-orange-500', icon: Activity },
  { name: 'Metabolic Function', color: 'from-violet-400 to-fuchsia-500', icon: Zap },
  { name: 'Inflammation Level', color: 'from-rose-400 to-red-500', icon: AlertTriangle },
]

function Dashboard() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-5 flex items-center gap-5 shadow-sm">
          <Gauge value={86} />
          <div>
            <div className="text-slate-900 font-medium">Your VitalCode Health</div>
            <div className="text-3xl font-light text-slate-900 mb-1">86 / 100</div>
            <div className="inline-flex items-center text-emerald-600 text-sm">
              <TrendingUp className="h-4 w-4 mr-1" /> +8% since last scan
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {biomarkerMeta.map(({ name, color, icon: Icon }) => (
            <div key={name} className={`rounded-2xl p-4 bg-gradient-to-br ${color} text-white shadow-md shadow-black/5`}>
              <div className="flex items-center justify-between">
                <div className="text-sm/5 opacity-80">{name}</div>
                <Icon className="h-5 w-5 opacity-90" />
              </div>
              <div className="mt-3 text-2xl font-semibold">{Math.floor(70 + Math.random()*25)}%</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <button className="w-full inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition">
            <span className="text-slate-800">View Full Scan Report</span>
            <ArrowRight className="h-5 w-5 text-slate-400" />
          </button>
          <button className="w-full inline-flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-white p-4 shadow-lg shadow-emerald-500/20">
            <span>AI Coach Recommendations</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50 p-4 flex items-center justify-between">
          <div>
            <div className="text-emerald-800 font-medium">Next Scan Due in 21 Days</div>
            <div className="text-emerald-700/80 text-sm">Stay on track for the best results</div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-3 py-2 text-sm">
            <Calendar className="h-4 w-4" /> Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
