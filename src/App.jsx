import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthScreen from './components/AuthScreen'
import Dashboard from './components/Dashboard'
import AICoach from './components/AICoach'
import Progress from './components/Progress'
import Store from './components/Store'
import Franchise from './components/Franchise'
import TabBar from './components/TabBar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coach" element={<AICoach />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/store" element={<Store />} />
        <Route path="/owner" element={<Franchise />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <TabBar />
    </div>
  )
}

export default App
