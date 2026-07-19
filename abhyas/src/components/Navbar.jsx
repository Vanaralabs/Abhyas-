import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../utils/store'
import { BookOpen, BarChart3, Home, Swords, Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const location = useLocation()
  const { xp, streak, level } = useStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track previous values for animation triggers
  const prevXp = useRef(xp)
  const prevStreak = useRef(streak)
  const prevLevel = useRef(level)
  const [xpBump, setXpBump] = useState(false)
  const [streakBump, setStreakBump] = useState(false)
  const [levelBump, setLevelBump] = useState(false)

  useEffect(() => {
    if (xp !== prevXp.current) {
      setXpBump(true)
      const t = setTimeout(() => setXpBump(false), 600)
      prevXp.current = xp
      return () => clearTimeout(t)
    }
  }, [xp])

  useEffect(() => {
    if (streak !== prevStreak.current) {
      setStreakBump(true)
      const t = setTimeout(() => setStreakBump(false), 600)
      prevStreak.current = streak
      return () => clearTimeout(t)
    }
  }, [streak])

  useEffect(() => {
    if (level !== prevLevel.current) {
      setLevelBump(true)
      const t = setTimeout(() => setLevelBump(false), 800)
      prevLevel.current = level
      return () => clearTimeout(t)
    }
  }, [level])

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-md border-b border-surface-700/80" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Abhyas - Home">
            <span className="text-xl font-bold bg-gradient-to-r from-text-primary to-accent-blue bg-clip-text text-transparent group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
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
                className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 btn-press ${
                  isActive(path)
                    ? 'text-accent-blue bg-surface-800'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-800'
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                {label}
                {isActive(path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Stats — with pulse animations on change */}
          <div className="hidden md:flex items-center gap-4" aria-label="Your stats">
            {/* Streak */}
            <div className="flex items-center gap-1.5 text-sm" title="Daily streak">
              <span aria-hidden="true" className="streak-fire">🔥</span>
              <span className={`font-semibold transition-all duration-300 ${
                streakBump ? 'text-accent-orange scale-125 animate-bounce-in' : 'text-text-secondary'
              }`}>
                {streak}
              </span>
              <span className="sr-only">{streak} day streak</span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1.5 text-sm" title="Experience points">
              <span aria-hidden="true" className="text-accent-blue">⚡</span>
              <span className={`font-semibold transition-all duration-300 ${
                xpBump ? 'text-accent-blue xp-glow scale-110' : 'text-text-secondary'
              }`}>
                {xp}
              </span>
              <span className="text-text-muted text-xs">XP</span>
            </div>

            {/* Level Badge */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-500 ${
                levelBump
                  ? 'bg-gradient-to-br from-accent-purple to-accent-blue text-white scale-125 animate-bounce-in shadow-lg shadow-accent-purple/30'
                  : 'bg-surface-700 text-accent-purple border border-surface-600'
              }`}
              title={`Level ${level}`}
              aria-label={`Level ${level}`}
            >
              {level}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary btn-press rounded-lg hover:bg-surface-800 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — slide-in animation */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-surface-700 bg-surface-900/98 backdrop-blur-md mobile-menu-enter" role="menu">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                role="menuitem"
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(path) ? 'page' : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all btn-press ${
                  isActive(path)
                    ? 'text-accent-blue bg-surface-800 border border-accent-blue/20'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-800'
                }`}
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </Link>
            ))}
            {/* Mobile stats row */}
            <div className="flex items-center gap-5 px-3 pt-4 mt-2 border-t border-surface-700" aria-label="Your stats">
              <div className="flex items-center gap-1.5">
                <span className="streak-fire">🔥</span>
                <span className="text-sm font-semibold text-text-primary">{streak}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-accent-blue">⚡</span>
                <span className="text-sm font-semibold text-text-primary xp-glow">{xp} XP</span>
              </div>
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-surface-700 border border-surface-600">
                <span className="text-xs font-bold text-accent-purple">{level}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
