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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-sm border-b border-surface-700" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Abhyas - Home">
            <span className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
              अभ्यास
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                role="menuitem"
                aria-current={isActive(path) ? 'page' : undefined}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-accent-blue bg-surface-800'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-800'
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="hidden md:flex items-center gap-4" aria-label="Your stats">
            <div className="flex items-center gap-1.5 text-sm" title="Daily streak">
              <span aria-hidden="true" className="text-accent-orange">🔥</span>
              <span className="text-text-secondary font-medium">{streak}</span>
              <span className="sr-only">{streak} day streak</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm" title="Experience points">
              <span aria-hidden="true" className="text-accent-blue">⚡</span>
              <span className="text-text-secondary font-medium">{xp} XP</span>
            </div>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-surface-700 text-xs font-bold text-accent-purple" title={`Level ${level}`} aria-label={`Level ${level}`}>
              {level}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-surface-700 bg-surface-900" role="menu">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                role="menuitem"
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(path) ? 'page' : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-accent-blue bg-surface-800'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-800'
                }`}
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-3 pt-3 border-t border-surface-700 mt-2" aria-label="Your stats">
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
