import React from 'react'
import { Home, Bot, LineChart, Store, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function TabBar() {
  const tabs = [
    { to: '/dashboard', icon: Home, label: 'Home' },
    { to: '/coach', icon: Bot, label: 'Coach' },
    { to: '/progress', icon: LineChart, label: 'Progress' },
    { to: '/store', icon: Store, label: 'Store' },
    { to: '/owner', icon: User, label: 'Owner' },
  ]
  return (
    <nav className="fixed bottom-4 left-0 right-0">
      <div className="mx-auto max-w-md">
        <div className="mx-6 rounded-2xl bg-white/95 backdrop-blur border border-slate-200 shadow-lg shadow-slate-900/5 px-3 py-2 flex justify-between">
          {tabs.map(t => (
            <NavLink key={t.to} to={t.to} className={({ isActive }) => `flex flex-col items-center gap-1 px-3 py-1 rounded-xl ${isActive ? 'text-emerald-600' : 'text-slate-500'}`}>
              <t.icon className="h-5 w-5" />
              <span className="text-[11px]">{t.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default TabBar
