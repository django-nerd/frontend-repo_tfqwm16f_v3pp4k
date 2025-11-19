import React from 'react'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import HeroCover from './HeroCover'

function AuthScreen() {
  return (
    <div className="bg-white min-h-screen">
      <HeroCover />

      <div className="max-w-md mx-auto -mt-14 relative z-10 px-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-emerald-500/5 border border-slate-100 p-6">
          <h2 className="text-slate-900 text-2xl font-light tracking-tight mb-6">Welcome back</h2>
          <div className="space-y-4">
            <div className="relative">
              <input type="tel" placeholder="Phone number" className="w-full rounded-2xl border border-slate-200/70 bg-slate-50/60 focus:bg-white px-4 py-3 pl-11 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/60" />
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
            </div>
            <div className="relative">
              <input type="email" placeholder="Email address" className="w-full rounded-2xl border border-slate-200/70 bg-slate-50/60 focus:bg-white px-4 py-3 pl-11 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/60" />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-500" />
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-white font-medium py-3 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all">
              Login
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full rounded-2xl border border-slate-200 text-slate-700 py-3 hover:bg-slate-50 transition">Create Account</button>
            <p className="text-center text-xs text-slate-500">Powered by AI Bio-Scan Technology</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="text-xs text-slate-500 hover:text-slate-700 underline underline-offset-4">Franchise Partner? Login here</button>
        </div>
      </div>
    </div>
  )
}

export default AuthScreen
