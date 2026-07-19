import { Link } from 'react-router-dom'
import { useStore } from '../utils/store'
import languages from '../data/languages'

export default function Languages() {
  const { getLanguageProgress } = useStore()

  return (
    <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">All Courses</h1>
        <p className="text-text-secondary mt-2">Choose a language and start learning at your own pace.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {languages.map((lang) => {
          const completed = getLanguageProgress(lang.id)
          const progressPct = lang.totalLessons > 0 ? Math.round((completed / lang.totalLessons) * 100) : 0

          return (
            <Link
              key={lang.id}
              to={`/language/${lang.id}`}
              className="group relative p-5 bg-surface-800 rounded-xl border border-surface-700 hover:border-surface-600 transition-all hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{lang.icon}</span>
                <div>
                  <h3 className="font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                    {lang.title}
                  </h3>
                  <span className="text-xs text-text-muted">{lang.difficulty}</span>
                </div>
              </div>

              <p className="text-sm text-text-secondary line-clamp-2 mb-4">{lang.description}</p>

              <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                <span>{lang.totalLessons} lessons</span>
                {completed > 0 && <span>{progressPct}%</span>}
              </div>

              {completed > 0 && (
                <div className="w-full h-1.5 bg-surface-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-green rounded-full transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              )}

              {completed === 0 && (
                <div className="w-full h-1.5 bg-surface-700 rounded-full" />
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {lang.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-700 text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
