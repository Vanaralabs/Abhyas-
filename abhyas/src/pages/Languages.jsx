import { Link } from 'react-router-dom'
import { useStore } from '../utils/store'
import languages from '../data/languages'
import { ArrowRight } from 'lucide-react'

export default function Languages() {
  const { getLanguageProgress } = useStore()

  return (
    <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">All Courses</h1>
        <p className="text-text-secondary mt-2">Choose a language and start learning at your own pace.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 stagger-children">
        {languages.map((lang) => {
          const completed = getLanguageProgress(lang.id)
          const progressPct = lang.totalLessons > 0 ? Math.round((completed / lang.totalLessons) * 100) : 0

          return (
            <Link
              key={lang.id}
              to={`/language/${lang.id}`}
              className="group relative p-5 bg-surface-800 rounded-2xl card-glow btn-press"
            >
              {/* Progress ring indicator for started courses */}
              {completed > 0 && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-full">
                    {progressPct}%
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{lang.icon}</span>
                <div>
                  <h3 className="font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                    {lang.title}
                  </h3>
                  <span className="text-xs text-text-muted">{lang.difficulty}</span>
                </div>
              </div>

              <p className="text-sm text-text-secondary line-clamp-2 mb-4 leading-relaxed">{lang.description}</p>

              <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                <span>{lang.totalLessons} lessons</span>
                {completed > 0 && (
                  <span className="text-accent-green font-medium">{completed} done</span>
                )}
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-surface-700 rounded-full overflow-hidden">
                {completed > 0 ? (
                  <div
                    className="h-full bg-gradient-to-r from-accent-green to-accent-blue rounded-full progress-animated"
                    style={{ width: `${progressPct}%` }}
                  />
                ) : (
                  <div className="h-full w-0 rounded-full" />
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {lang.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-700 text-text-muted border border-surface-600/50">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow — pulls user forward */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                <ArrowRight size={16} className="text-accent-blue" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
