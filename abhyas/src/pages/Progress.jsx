import { motion } from 'framer-motion'
import { Flame, Zap, Trophy, Target, Award } from 'lucide-react'
import { useStore } from '../utils/store'
import { getAllCourses } from '../data/courses'

const badges = [
  { id: 'first-lesson', name: 'First Steps', icon: '🚀', desc: 'Complete 1 lesson', req: (s) => s.totalLessons >= 1 },
  { id: 'streak-3', name: 'On Fire', icon: '🔥', desc: '3-day streak', req: (s) => s.streak >= 3 },
  { id: 'streak-7', name: 'Unstoppable', icon: '⚡', desc: '7-day streak', req: (s) => s.streak >= 7 },
  { id: 'xp-100', name: 'Centurion', icon: '💯', desc: 'Earn 100 XP', req: (s) => s.xp >= 100 },
  { id: 'xp-500', name: 'Power User', icon: '⭐', desc: 'Earn 500 XP', req: (s) => s.xp >= 500 },
  { id: 'lessons-10', name: 'Dedicated', icon: '📚', desc: '10 lessons', req: (s) => s.totalLessons >= 10 },
  { id: 'lessons-25', name: 'Scholar', icon: '🎓', desc: '25 lessons', req: (s) => s.totalLessons >= 25 },
  { id: 'arena-3', name: 'Arena Fighter', icon: '⚔️', desc: '3 arena wins', req: (s) => s.arenaSolved >= 3 },
  { id: 'multi-lang', name: 'Polyglot', icon: '🌍', desc: '3 courses started', req: (s) => s.coursesStarted >= 3 },
]

export default function Progress() {
  const { xp, streak, streakFreeze, progress, level } = useStore()

  const totalLessons = Object.values(progress).reduce((sum, course) => sum + Object.keys(course).length, 0)
  const coursesStarted = Object.keys(progress).length
  const arenaSolved = JSON.parse(localStorage.getItem('arena_solved') || '[]').length
  const stats = { xp, streak, totalLessons, coursesStarted, arenaSolved }

  const xpForNextLevel = level * 100
  const currentLevelXp = xp - (level - 1) * 100
  const levelPercent = Math.min((currentLevelXp / xpForNextLevel) * 100, 100)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-8">Your <span className="text-neon-cyan">Progress</span></h1>

        {/* Level Card */}
        <div className="glass-card rounded-2xl p-8 border border-neon-cyan/10 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5" />
          <div className="relative flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-2xl font-bold">
                {level}
              </div>
              <div>
                <p className="text-sm text-gray-400">Level {level}</p>
                <p className="text-2xl font-bold">{xp} XP Total</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Next level</p>
              <p className="text-lg font-semibold text-neon-cyan">{xpForNextLevel - currentLevelXp} XP to go</p>
            </div>
          </div>
          <div className="relative h-3 bg-dark-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${levelPercent}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Flame, label: 'Streak', value: `${streak} days`, color: 'text-orange-400', bg: 'bg-orange-400/10' },
            { icon: Zap, label: 'Total XP', value: xp, color: 'text-neon-cyan', bg: 'bg-neon-cyan/10' },
            { icon: Target, label: 'Lessons', value: totalLessons, color: 'text-neon-green', bg: 'bg-neon-green/10' },
            { icon: Trophy, label: 'Arena Wins', value: arenaSolved, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 border border-white/5"
            >
              <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                <stat.icon size={18} className={stat.color} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Streak Tracker */}
        <div className="glass-card rounded-2xl p-6 border border-white/5 mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Flame size={20} className="text-orange-400" />
            Coding Streak
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-medium ${
                    i < (streak % 7 || (streak > 0 ? 7 : 0))
                      ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                      : 'bg-dark-700 text-gray-600'
                  }`}
                >
                  {i < (streak % 7 || (streak > 0 ? 7 : 0)) ? '🔥' : i + 1}
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-400">Streak Freezes</p>
              <p className="text-lg font-bold text-blue-400">{streakFreeze} left</p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="glass-card rounded-2xl p-6 border border-white/5">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Award size={20} className="text-neon-purple" />
            Badges
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {badges.map((badge) => {
              const unlocked = badge.req(stats)
              return (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-xl p-4 text-center border transition-all ${
                    unlocked
                      ? 'glass-card border-neon-purple/20 shadow-lg'
                      : 'bg-dark-800/50 border-white/5 opacity-40 grayscale'
                  }`}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="text-xs font-medium truncate">{badge.name}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{badge.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
