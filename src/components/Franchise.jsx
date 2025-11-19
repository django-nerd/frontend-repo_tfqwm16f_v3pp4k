import React from 'react'
import { Users, TrendingUp, Bell } from 'lucide-react'

function Franchise() {
  const rows = [
    { name: 'Alex Chen', date: '2025-04-07', trend: 'up' },
    { name: 'Maria Lopez', date: '2025-03-17', trend: 'flat' },
    { name: 'James Patel', date: '2025-02-24', trend: 'down' },
  ]
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl p-4 bg-slate-50 border border-slate-100">
            <div className="text-slate-500 text-xs">Total Clients</div>
            <div className="text-slate-900 text-2xl font-semibold">128</div>
          </div>
          <div className="rounded-2xl p-4 bg-slate-50 border border-slate-100">
            <div className="text-slate-500 text-xs">Avg Health</div>
            <div className="text-slate-900 text-2xl font-semibold">78</div>
          </div>
          <div className="rounded-2xl p-4 bg-slate-50 border border-slate-100">
            <div className="text-slate-500 text-xs">Upsell Alerts</div>
            <div className="text-slate-900 text-2xl font-semibold">12</div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs">
              <tr>
                <th className="p-3">Client</th>
                <th className="p-3">Last Scan</th>
                <th className="p-3">Trend</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-t border-slate-100 text-slate-700">
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.date}</td>
                  <td className="p-3">{r.trend === 'up' ? '⬈' : r.trend === 'down' ? '⬊' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-white p-4 shadow">
          <Bell className="h-5 w-5" /> Send Check-in Reminder
        </button>
      </div>
    </div>
  )
}

export default Franchise
