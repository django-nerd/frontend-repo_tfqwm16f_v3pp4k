import React from 'react'
import { CheckCircle2, Circle, ShoppingBag } from 'lucide-react'

function AICoach() {
  const actions = [
    'Hydrate: 2.5L water with electrolytes',
    '10-minute breath work before sleep',
    'Add 25g protein to breakfast'
  ]
  const days = ['M','T','W','T','F','S','S']

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-light text-slate-900">Your Body Status Today</h2>
          <p className="text-slate-600">Energy trending up, recovery adequate, cortisol stable by afternoon. Focus on gut-friendly meals and keep caffeine before noon.</p>
          <p className="text-slate-600">Training: moderate intensity. Aim for 8,000 steps and 7.5 hours sleep.</p>
          <p className="text-slate-600">Supplements: Omega-3, magnesium glycinate, probiotic blend.</p>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
          <div className="text-slate-900 font-medium mb-3">Top Actions</div>
          {actions.map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <Circle className="h-5 w-5 text-slate-400" />
              <span className="text-slate-700">{a}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <div className="text-slate-900 font-medium mb-3">7-day Micro Habit Plan</div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((d, i) => (
              <div key={i} className="aspect-square rounded-xl border border-slate-200 flex items-center justify-center text-slate-600">{d}</div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-xl bg-emerald-600 text-white py-3">Add to My Routine</button>
        </div>

        <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-white p-4 shadow">
          <ShoppingBag className="h-5 w-5" /> Buy Suggested Supplements
        </button>
      </div>
    </div>
  )
}

export default AICoach
