import { useStore } from '../utils/store'
import { Link } from 'react-router-dom'
import languages from '../data/languages'
import { Trophy, Flame, Zap, BookOpen, BarChart3, RotateCcw, Target, ArrowRight, Sparkles } from 'lucide-react'

export default function Progress() {
  const {
    xp, streak, level, streakFreeze,
    getLanguageProgress, getTotalCompleted,
    getArenaSolved, resetProgress
  } = useStore()

  const totalCompleted = getTotalCompleted()

  const languageStats = languages.map(lang => ({
    ...lang,
    completed: getLanguageProgress(lang.id),
    arenaSolved: getArenaSolved(lang.id),
    pct: lang.totalLessons > 0 ? Math.round((getLanguageProgress(lang.id) / lang.totalLessons) * 100) : 0,
  })).sort((a, b) => b.completed - a.completed)

  const activeLanguages = languageStats.filter(l => l.completed > 0)
  const xpToNextLevel = 100 - (xp % 100)
  const lessonsToNextLevel = Math.ceil(xpToNextLevel / 25)

  return (
    <div className="page-transition max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Your Progress</h1>
        <p className="text-text-secondary mt-1">Track your learning journey across all languages.</p>
      </div>

      {/* Next Milestone — always visible, endowed progress */}
      <div className="mb-8 p-5 bg-surface-800 rounded-2xl border border-surface-700 shimmer-border overflow-hidden relative">
        <div className="flex items-center gap-3 mb-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
            <Target size={20} className="text-accent-purple" />
          </div>
          <div>
            <p className="text-sm font-bold text-text-primary">Next Milestone: Level {level + 1}</p>
            <p className="text-xs text-text-muted">{xpToNextLevel} XP away — just {lessonsToNextLevel} more lesson{lessonsToNextLevel > 1 ? 's' : ''}!</p>
          </div>
        </div>
        <div className="w-full h-3 bg-surface-700 rounded-full overflow-hidden relative z-10" role="progressbar" aria-valuenow={xp % 100} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-full progress-animated"
            style={{ width: `${((xp % 100) / 100) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-text-muted relative z-10">
          <span>Lv. {level}</span>
          <span>Lv. {level + 1}</span>
        </div>
      </div>

      {/* Stats Grid — with visual weight */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 stagger-children">
        <div className="p-5 bg-surface-800 rounded-2xl border border-surface-700 hover-lift">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={18} className="text-accent-blue" />
            <span className="text-xs text-text-muted font-medium">Total XP</span>
          </div>
          <p className="stat-number text-3xl text-accent-blue xp-glow">{xp}</p>
        </div>

        <div className="p-5 bg-surface-800 rounded-2xl border border-surface-700 hover-lift">
          <div className="flex items-center gap-2 mb-3">
            <Flame size={18} className="text-accent-orange" />
            <span className="text-xs text-text-muted font-medium">Streak</span>
          </div>
          <p className="stat-number text-3xl text-accent-orange">{streak} <span className="text-base text-text-muted font-normal">days</span></p>
          <p className="text-[10px] text-text-muted mt-1">{streakFreeze} freezes left</p>
        </div>

        <div className="p-5 bg-surface-800 rounded-2xl border border-surface-700 hover-lift">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-accent-green" />
            <span className="text-xs text-text-muted font-medium">Lessons</span>
          </div>
          <p className="stat-number text-3xl text-accent-green">{totalCompleted}</p>
          <p className="text-[10px] text-text-muted mt-1">completed</p>
        </div>

        <div className="p-5 bg-surface-800 rounded-2xl border border-surface-700 hover-lift">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={18} className="text-accent-purple" />
            <span className="text-xs text-text-muted font-medium">Level</span>
          </div>
          <p className="stat-number text-3xl text-accent-purple">{level}</p>
          <div className="mt-2 w-full h-2 bg-surface-700 rounded-full overflow-hidden" role="progressbar" aria-valuenow={xp % 100} aria-valuemin={0} aria-valuemax={100} aria-label={`XP to next level: ${xp % 100}%`}>
            <div
              className="h-full bg-gradient-to-r from-accent-purple to-accent-pink rounded-full progress-animated"
              style={{ width: `${((xp % 100) / 100) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Language Progress */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-text-primary mb-5 flex items-center gap-2">
          <BarChart3 size={20} className="text-accent-blue" />
          Language Progress
        </h2>

        {activeLanguages.length === 0 ? (
          <div className="p-10 bg-surface-800 rounded-2xl border border-surface-700 text-center">
            <Sparkles size={32} className="text-text-muted mx-auto mb-3" />
            <p className="text-text-secondary mb-4">No progress yet. Start a course to see your stats here!</p>
            <Link to="/courses" className="btn-gradient btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-sm">
              Browse Courses <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="space-y-3 stagger-children">
            {activeLanguages.map(lang => (
              <Link
                key={lang.id}
                to={`/language/${lang.id}`}
                className="block p-5 bg-surface-800 rounded-2xl border border-surface-700 hover:border-surface-600 transition-all btn-press group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{lang.icon}</span>
                    <div>
                      <h3 className="font-semibold text-text-primary group-hover:text-accent-blue transition-colors">{lang.title}</h3>
                      <span className="text-xs text-text-muted">
                        {lang.completed} / {lang.totalLessons} lessons
                        {lang.arenaSolved > 0 && ` · ${lang.arenaSolved} arena`}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-accent-blue">{lang.pct}%</span>
                </div>
                <div
                  className="w-full h-2.5 bg-surface-700 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={lang.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.title} progress: ${lang.pct}%`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full progress-animated"
                    style={{ width: `${lang.pct}%` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Not Started Languages */}
      {activeLanguages.length < languages.length && (
        <div className="mb-10">
          <h2 className="text-lg font-bold text-text-primary mb-4">Not Started</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {languageStats.filter(l => l.completed === 0).map(lang => (
              <Link
                key={lang.id}
                to={`/language/${lang.id}`}
                className="p-3 bg-surface-800/60 rounded-xl border border-surface-700/60 hover:border-surface-600 transition-all btn-press group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg group-hover:scale-110 transition-transform">{lang.icon}</span>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{lang.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Reset */}
      <div className="pt-6 border-t border-surface-700">
        <button
          onClick={() => {
            if (confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
              resetProgress()
            }
          }}
          className="flex items-center gap-2 px-4 py-2 text-sm text-accent-red hover:text-red-400 hover:bg-accent-red/5 rounded-lg transition-all btn-press"
        >
          <RotateCcw size={14} />
          Reset All Progress
        </button>
      </div>
    </div>
  )
}
