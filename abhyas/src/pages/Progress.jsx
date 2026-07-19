import { useStore } from '../utils/store'
import languages from '../data/languages'
import { Trophy, Flame, Zap, BookOpen, BarChart3, RotateCcw } from 'lucide-react'

export default function Progress() {
  const {
    xp, streak, level, streakFreeze,
    getLanguageProgress, getTotalCompleted,
    getArenaSolved, resetProgress
  } = useStore()

  const totalCompleted = getTotalCompleted()

  // Calculate per-language stats
  const languageStats = languages.map(lang => ({
    ...lang,
    completed: getLanguageProgress(lang.id),
    arenaSolved: getArenaSolved(lang.id),
    pct: lang.totalLessons > 0 ? Math.round((getLanguageProgress(lang.id) / lang.totalLessons) * 100) : 0,
  })).sort((a, b) => b.completed - a.completed)

  const activeLanguages = languageStats.filter(l => l.completed > 0)
  const xpToNextLevel = 100 - (xp % 100)

  return (
    <div className="page-transition max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">Your Progress</h1>
        <p className="text-text-secondary mt-1">Track your learning journey across all languages.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={18} className="text-accent-blue" />
            <span className="text-xs text-text-muted">Total XP</span>
          </div>
          <p className="text-2xl font-bold text-text-primary">{xp}</p>
          <p className="text-xs text-text-muted mt-1">{xpToNextLevel} XP to level {level + 1}</p>
        </div>

        <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
          <div className="flex items-center gap-2 mb-2">
            <Flame size={18} className="text-accent-orange" />
            <span className="text-xs text-text-muted">Streak</span>
          </div>
          <p className="text-2xl font-bold text-text-primary">{streak} days</p>
          <p className="text-xs text-text-muted mt-1">{streakFreeze} freezes left</p>
        </div>

        <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={18} className="text-accent-green" />
            <span className="text-xs text-text-muted">Lessons</span>
          </div>
          <p className="text-2xl font-bold text-text-primary">{totalCompleted}</p>
          <p className="text-xs text-text-muted mt-1">completed</p>
        </div>

        <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={18} className="text-accent-purple" />
            <span className="text-xs text-text-muted">Level</span>
          </div>
          <p className="text-2xl font-bold text-text-primary">{level}</p>
          <div className="mt-2 w-full h-1.5 bg-surface-700 rounded-full overflow-hidden" role="progressbar" aria-valuenow={xp % 100} aria-valuemin={0} aria-valuemax={100} aria-label={`XP to next level: ${xp % 100}%`}>
            <div
              className="h-full bg-accent-purple rounded-full"
              style={{ width: `${((xp % 100) / 100) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Language Progress */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <BarChart3 size={20} className="text-text-muted" />
          Language Progress
        </h2>

        {activeLanguages.length === 0 ? (
          <div className="p-8 bg-surface-800 rounded-xl border border-surface-700 text-center">
            <p className="text-text-secondary">No progress yet. Start a course to see your stats here!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeLanguages.map(lang => (
              <div
                key={lang.id}
                className="p-4 bg-surface-800 rounded-xl border border-surface-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lang.icon}</span>
                    <div>
                      <h3 className="font-medium text-text-primary">{lang.title}</h3>
                      <span className="text-xs text-text-muted">
                        {lang.completed} / {lang.totalLessons} lessons
                        {lang.arenaSolved > 0 && ` • ${lang.arenaSolved} arena challenges`}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-accent-blue">{lang.pct}%</span>
                </div>
                <div
                  className="w-full h-2 bg-surface-700 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={lang.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.title} progress: ${lang.pct}%`}
                >
                  <div
                    className="h-full bg-accent-blue rounded-full transition-all duration-500"
                    style={{ width: `${lang.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* All Languages Overview (inactive ones) */}
      {activeLanguages.length < languages.length && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Not Started</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {languageStats.filter(l => l.completed === 0).map(lang => (
              <div key={lang.id} className="p-3 bg-surface-800/60 rounded-xl border border-surface-700/60">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{lang.icon}</span>
                  <span className="text-sm text-text-secondary">{lang.title}</span>
                </div>
              </div>
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
          className="flex items-center gap-2 px-4 py-2 text-sm text-accent-red hover:text-red-400 transition-colors"
        >
          <RotateCcw size={14} />
          Reset All Progress
        </button>
      </div>
    </div>
  )
}
