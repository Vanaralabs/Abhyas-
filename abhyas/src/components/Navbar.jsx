import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../utils/store'
import { BookOpen, Trophy, BarChart3, Home, Swords, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const { xp, streak, level } = useStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/courses', label: 'Courses', icon: BookOpen },
    { path: '/arena', label: 'Arena', icon: Swords },
    { path: '/progress', label: 'Progress', icon: BarChart3 },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-sm border-b border-surface-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
              अभ्यास
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-accent-blue bg-surface-800'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-800'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-accent-orange">🔥</span>
              <span className="text-text-secondary font-medium">{streak}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-accent-blue">⚡</span>
              <span className="text-text-secondary font-medium">{xp} XP</span>
            </div>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-surface-700 text-xs font-bold text-accent-purple">
              {level}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-700 bg-surface-900">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-accent-blue bg-surface-800'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-800'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-3 pt-3 border-t border-surface-700 mt-2">
              <span className="text-sm text-text-secondary">🔥 {streak} streak</span>
              <span className="text-sm text-text-secondary">⚡ {xp} XP</span>
              <span className="text-sm text-text-secondary">Lv. {level}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
