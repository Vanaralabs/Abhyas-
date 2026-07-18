import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../utils/store'
import { Flame, Trophy, Zap, Code2, Swords, TrendingUp } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const { streak, xp, level } = useStore()

  const navLinks = [
    { path: '/', label: 'Home', icon: Code2 },
    { path: '/courses', label: 'Courses', icon: Code2 },
    { path: '/arena', label: 'Arena', icon: Swords },
    { path: '/progress', label: 'Progress', icon: TrendingUp },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-card px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Abhyas
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                  ${isActive 
                    ? 'bg-white/10 text-neon-cyan' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-4">
          {/* Streak */}
          <div className="flex items-center gap-1.5 text-sm">
            <Flame size={18} style={{ color: '#ff6600' }} />
            <span className="font-bold text-white">{streak}</span>
          </div>
          
          {/* XP */}
          <div className="flex items-center gap-1.5 text-sm">
            <Zap size={18} className="text-neon-cyan" />
            <span className="font-bold text-white">{xp} XP</span>
          </div>

          {/* Level */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border border-neon-purple/30">
            <Trophy size={14} className="text-neon-purple" />
            <span className="text-xs font-bold text-neon-purple">Lv.{level}</span>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
