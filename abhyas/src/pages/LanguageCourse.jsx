import { useParams, Link } from 'react-router-dom'
import { useStore } from '../utils/store'
import { ChevronRight, CheckCircle2, Circle, BookOpen, Trophy, Flame } from 'lucide-react'
import { useMemo } from 'react'

// Dynamic import map for course data
const courseModules = import.meta.glob('../data/*.js', { eager: true })

function getCourseData(langId) {
  const key = Object.keys(courseModules).find(k => k.endsWith(`/${langId}.js`))
  if (key) {
    const raw = courseModules[key].default
    if (!raw) return null
    const normalized = { ...raw }
    normalized.sections = (raw.sections || []).map(section => {
      if (section.chapters) return section
      if (section.modules) return { ...section, chapters: section.modules }
      if (section.lessons) return { ...section, chapters: [{ id: section.id, title: section.title, lessons: section.lessons }] }
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
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-700 text-text-primary rounded-xl hover:bg-surface-600 transition-colors btn-press"
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

  let totalLessonsInData = 0
  course.sections.forEach(s => s.chapters.forEach(c => { totalLessonsInData += c.lessons.length }))

  // Calculate next milestone
  const nextSectionMilestone = (() => {
    for (const section of course.sections) {
      let sectionTotal = 0
      let sectionCompleted = 0
      for (const chapter of section.chapters) {
        sectionTotal += chapter.lessons.length
        sectionCompleted += chapter.lessons.filter(l => isLessonCompleted(langId, section.id, l.id)).length
      }
      if (sectionCompleted < sectionTotal && sectionCompleted > 0) {
        return { section, remaining: sectionTotal - sectionCompleted, total: sectionTotal, completed: sectionCompleted }
      }
    }
    return null
  })()

  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <Link to="/courses" className="text-sm text-text-muted hover:text-accent-blue mb-4 inline-flex items-center gap-1 transition-colors">
          ← All Courses
        </Link>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-5xl">{course.icon}</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">{course.title}</h1>
            <p className="text-text-secondary mt-1">{course.description}</p>
          </div>
        </div>

        {/* Progress bar — with overshoot animation */}
        <div className="mt-6 p-5 bg-surface-800 rounded-2xl border border-surface-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-text-secondary">
              <span className="font-bold text-text-primary">{totalCompleted}</span> of {totalLessonsInData} lessons completed
            </span>
            <span className="text-sm font-bold text-accent-blue">{progressPct}%</span>
          </div>
          <div className="w-full h-2.5 bg-surface-700 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100} aria-label={`Course progress: ${progressPct}%`}>
            <div
              className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full progress-animated"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Next milestone nudge */}
        {nextSectionMilestone && (
          <div className="mt-3 flex items-center gap-2 px-4 py-2.5 bg-surface-800/60 rounded-xl border border-surface-700/50">
            <Flame size={14} className="text-accent-orange flex-shrink-0" />
            <p className="text-xs text-text-secondary">
              <span className="text-text-primary font-semibold">{nextSectionMilestone.remaining} more</span> to complete "{nextSectionMilestone.section.title}" — you're {Math.round((nextSectionMilestone.completed / nextSectionMilestone.total) * 100)}% through!
            </p>
          </div>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {course.sections.map((section, sectionIdx) => {
          // Calculate section progress
          let sectionTotal = 0
          let sectionCompleted = 0
          section.chapters.forEach(ch => {
            sectionTotal += ch.lessons.length
            sectionCompleted += ch.lessons.filter(l => isLessonCompleted(langId, section.id, l.id)).length
          })
          const sectionDone = sectionCompleted === sectionTotal && sectionTotal > 0

          return (
            <div key={section.id} className="section-accent">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    {sectionDone && <Trophy size={18} className="text-accent-gold" />}
                    {section.title}
                  </h2>
                  {section.description && (
                    <p className="text-sm text-text-secondary mt-1">{section.description}</p>
                  )}
                </div>
                {sectionTotal > 0 && (
                  <span className="text-xs text-text-muted bg-surface-700 px-2.5 py-1 rounded-full">
                    {sectionCompleted}/{sectionTotal}
                  </span>
                )}
              </div>

              {/* Chapters */}
              <div className="space-y-3 stagger-children">
                {section.chapters.map((chapter) => {
                  const completedInChapter = chapter.lessons.filter(l =>
                    isLessonCompleted(langId, section.id, l.id)
                  ).length
                  const allDone = completedInChapter === chapter.lessons.length

                  return (
                    <div
                      key={chapter.id}
                      className={`bg-surface-800 rounded-2xl border overflow-hidden transition-all ${
                        allDone ? 'border-accent-green/20' : 'border-surface-700'
                      }`}
                    >
                      {/* Chapter header */}
                      <div className="flex items-center justify-between px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            allDone ? 'bg-accent-green/10' : 'bg-surface-700'
                          }`}>
                            {allDone ? (
                              <CheckCircle2 size={18} className="text-accent-green" />
                            ) : (
                              <BookOpen size={16} className="text-text-muted" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-text-primary">{chapter.title}</h3>
                            <span className="text-xs text-text-muted">
                              {completedInChapter}/{chapter.lessons.length} lessons
                            </span>
                          </div>
                        </div>
                        {/* Chapter mini progress */}
                        {chapter.lessons.length > 1 && (
                          <div className="w-16 h-1.5 bg-surface-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent-green rounded-full progress-animated"
                              style={{ width: `${(completedInChapter / chapter.lessons.length) * 100}%` }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Lessons */}
                      <div className="border-t border-surface-700/70">
                        {chapter.lessons.map((lesson, idx) => {
                          const completed = isLessonCompleted(langId, section.id, lesson.id)
                          return (
                            <Link
                              key={lesson.id}
                              to={`/language/${langId}/${section.id}/${lesson.id}`}
                              className="flex items-center gap-3 px-5 py-3 hover:bg-surface-700/50 transition-all group btn-press"
                            >
                              <div className="flex-shrink-0">
                                {completed ? (
                                  <CheckCircle2 size={18} className="text-accent-green" />
                                ) : (
                                  <Circle size={18} className="text-surface-500 group-hover:text-accent-blue transition-colors" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className={`text-sm font-medium ${
                                  completed ? 'text-text-secondary' : 'text-text-primary'
                                }`}>
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                                  lesson.type === 'challenge' ? 'bg-accent-blue/10 text-accent-blue' :
                                  lesson.type === 'quiz' ? 'bg-accent-purple/10 text-accent-purple' :
                                  lesson.type === 'project' ? 'bg-accent-orange/10 text-accent-orange' :
                                  'bg-surface-700 text-text-muted'
                                }`}>
                                  {lesson.type}
                                </span>
                                <ChevronRight size={14} className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 transition-all" />
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
          )
        })}
      </div>
    </div>
  )
}
