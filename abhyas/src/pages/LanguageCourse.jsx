import { useParams, Link } from 'react-router-dom'
import { useStore } from '../utils/store'
import { ChevronRight, CheckCircle2, Circle, Lock, BookOpen } from 'lucide-react'
import { useMemo } from 'react'

// Dynamic import map for course data
const courseModules = import.meta.glob('../data/*.js', { eager: true })

function getCourseData(langId) {
  // Try to find a matching data file
  const key = Object.keys(courseModules).find(k => k.endsWith(`/${langId}.js`))
  if (key) {
    const raw = courseModules[key].default
    if (!raw) return null
    // Normalize data: ensure sections → chapters → lessons structure
    const normalized = { ...raw }
    normalized.sections = (raw.sections || []).map(section => {
      // If section has 'chapters', use as-is
      if (section.chapters) return section
      // If section has 'modules', rename to chapters
      if (section.modules) return { ...section, chapters: section.modules }
      // If section has 'lessons' directly, wrap in a single chapter
      if (section.lessons) return { ...section, chapters: [{ id: section.id, title: section.title, lessons: section.lessons }] }
      // Fallback
      return { ...section, chapters: [] }
    })
    return normalized
  }
  return null
}

export default function LanguageCourse() {
  const { langId } = useParams()
  const { isLessonCompleted, getLanguageProgress } = useStore()

  const course = useMemo(() => getCourseData(langId), [langId])

  if (!course) {
    return (
      <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Coming Soon</h1>
        <p className="text-text-secondary mb-6">
          The {langId} course is being prepared. Check back soon!
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-700 text-text-primary rounded-lg hover:bg-surface-600 transition-colors"
        >
          ← Back to Courses
        </Link>
      </div>
    )
  }

  const totalCompleted = getLanguageProgress(langId)
  const progressPct = course.totalLessons > 0
    ? Math.round((totalCompleted / course.totalLessons) * 100)
    : 0

  // Count total lessons in course data
  let totalLessonsInData = 0
  course.sections.forEach(s => s.chapters.forEach(c => { totalLessonsInData += c.lessons.length }))

  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <Link to="/courses" className="text-sm text-text-muted hover:text-text-secondary mb-4 inline-block">
          ← All Courses
        </Link>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-4xl">{course.icon}</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">{course.title}</h1>
            <p className="text-text-secondary mt-1">{course.description}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 p-4 bg-surface-800 rounded-xl border border-surface-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary">
              {totalCompleted} of {totalLessonsInData} lessons completed
            </span>
            <span className="text-sm font-medium text-accent-blue">{progressPct}%</span>
          </div>
          <div className="w-full h-2 bg-surface-700 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100} aria-label={`Course progress: ${progressPct}%`}>
            <div
              className="h-full bg-accent-blue rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {course.sections.map((section) => (
          <div key={section.id}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-text-primary">{section.title}</h2>
              {section.description && (
                <p className="text-sm text-text-secondary mt-1">{section.description}</p>
              )}
            </div>

            {/* Chapters */}
            <div className="space-y-3">
              {section.chapters.map((chapter) => {
                const completedInChapter = chapter.lessons.filter(l =>
                  isLessonCompleted(langId, section.id, l.id)
                ).length
                const allDone = completedInChapter === chapter.lessons.length

                return (
                  <div
                    key={chapter.id}
                    className="bg-surface-800 rounded-xl border border-surface-700 overflow-hidden"
                  >
                    {/* Chapter header */}
                    <div className="flex items-center justify-between px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          allDone ? 'bg-accent-green/10' : 'bg-surface-700'
                        }`}>
                          {allDone ? (
                            <CheckCircle2 size={18} className="text-accent-green" />
                          ) : (
                            <BookOpen size={16} className="text-text-muted" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-text-primary">{chapter.title}</h3>
                          <span className="text-xs text-text-muted">
                            {completedInChapter}/{chapter.lessons.length} lessons
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lessons */}
                    <div className="border-t border-surface-700">
                      {chapter.lessons.map((lesson, idx) => {
                        const completed = isLessonCompleted(langId, section.id, lesson.id)
                        return (
                          <Link
                            key={lesson.id}
                            to={`/language/${langId}/${section.id}/${lesson.id}`}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-surface-700/50 transition-colors group"
                          >
                            <div className="flex-shrink-0">
                              {completed ? (
                                <CheckCircle2 size={18} className="text-accent-green" />
                              ) : (
                                <Circle size={18} className="text-text-muted group-hover:text-accent-blue transition-colors" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className={`text-sm ${
                                completed ? 'text-text-secondary' : 'text-text-primary'
                              }`}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                                lesson.type === 'challenge' ? 'bg-accent-blue/10 text-accent-blue' :
                                lesson.type === 'quiz' ? 'bg-accent-purple/10 text-accent-purple' :
                                lesson.type === 'project' ? 'bg-accent-orange/10 text-accent-orange' :
                                'bg-surface-700 text-text-muted'
                              }`}>
                                {lesson.type}
                              </span>
                              <ChevronRight size={14} className="text-text-muted group-hover:text-text-secondary" />
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
