import { Link } from 'react-router-dom'
import { useStore } from '../utils/store'
import { ArrowRight, BookOpen, Swords, TrendingUp, Zap, Play, Target } from 'lucide-react'
import languages from '../data/languages'
import { getCourseData } from '../utils/courseData'

export default function Home() {
  const { xp, streak, level, getTotalCompleted, isLessonCompleted, getLanguageProgress } = useStore()
  const totalCompleted = getTotalCompleted()

  // Show first 6 languages as featured
  const featured = languages.slice(0, 6)

  // Find next lesson to continue learning
  const continueLesson = (() => {
    for (const lang of languages) {
      const progress = getLanguageProgress(lang.id)
      if (progress === 0) continue

      const course = getCourseData(lang.id)
      if (!course) continue

      for (const section of course.sections) {
        for (const chapter of section.chapters) {
          for (const lesson of chapter.lessons) {
            if (!isLessonCompleted(lang.id, section.id, lesson.id)) {
              return { lang, section, lesson, course }
            }
          }
        }
      }
    }
    return null
  })()

  // Calculate next milestone
  const xpToNextLevel = 100 - (xp % 100)
  const nextMilestone = (level + 1) * 100

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle background gradient orb */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight tracking-tight">
              Learn to code,{' '}
              <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                one lesson
              </span>{' '}
              at a time.
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-xl leading-relaxed">
              Master 12 programming languages with bite-sized lessons, interactive challenges, and real coding practice. Free forever.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="btn-gradient btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold shadow-lg"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/arena"
                className="btn-press inline-flex items-center gap-2 px-6 py-3.5 bg-surface-700 text-text-primary font-semibold rounded-xl hover:bg-surface-600 transition-all border border-surface-600"
              >
                <Swords size={18} />
                Arena
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip — glowing, heavy numbers */}
      {totalCompleted > 0 && (
        <section className="border-y border-surface-700 bg-surface-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 stagger-children">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-blue/10">
                  <Zap size={20} className="text-accent-blue" />
                </div>
                <div>
                  <p className="stat-number text-xl text-accent-blue xp-glow">{xp}</p>
                  <p className="text-xs text-text-muted">Total XP</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-orange/10">
                  <span className="streak-fire text-lg">🔥</span>
                </div>
                <div>
                  <p className="stat-number text-xl text-accent-orange">{streak}</p>
                  <p className="text-xs text-text-muted">Day Streak</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-green/10">
                  <BookOpen size={20} className="text-accent-green" />
                </div>
                <div>
                  <p className="stat-number text-xl text-accent-green">{totalCompleted}</p>
                  <p className="text-xs text-text-muted">Lessons Done</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-purple/10">
                  <TrendingUp size={20} className="text-accent-purple" />
                </div>
                <div>
                  <p className="stat-number text-xl text-accent-purple">Lv. {level}</p>
                  <p className="text-xs text-text-muted">{xpToNextLevel} XP to next</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Continue Learning — dominant, shimmer, gradient border */}
      {continueLesson && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <Link
            to={`/language/${continueLesson.lang.id}/${continueLesson.section.id}/${continueLesson.lesson.id}`}
            className="group relative flex items-center gap-4 p-6 bg-surface-800 rounded-2xl shimmer-border gradient-border overflow-hidden transition-all hover:bg-surface-700/80"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all">
              <Play size={24} className="text-accent-blue animate-float" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-accent-blue font-semibold mb-0.5 uppercase tracking-wide">Continue Learning</p>
              <p className="text-text-primary font-bold text-lg truncate">{continueLesson.lesson.title}</p>
              <p className="text-xs text-text-muted mt-0.5">{continueLesson.course.title} — {continueLesson.section.title}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="hidden sm:inline text-xs text-text-muted">Pick up where you left off</span>
              <ArrowRight size={20} className="text-accent-blue group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </section>
      )}

      {/* Next Milestone Nudge — endowed progress effect */}
      {totalCompleted > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <div className="flex items-center gap-3 px-4 py-3 bg-surface-800/60 rounded-xl border border-surface-700/50">
            <Target size={16} className="text-accent-purple flex-shrink-0" />
            <p className="text-sm text-text-secondary">
              <span className="text-text-primary font-semibold">{xpToNextLevel} XP</span> to reach Level {level + 1} — that's just {Math.ceil(xpToNextLevel / 25)} more lesson{Math.ceil(xpToNextLevel / 25) > 1 ? 's' : ''}!
            </p>
            <div className="ml-auto flex-shrink-0 w-20 h-1.5 bg-surface-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full progress-animated" style={{ width: `${((xp % 100) / 100) * 100}%` }} />
            </div>
          </div>
        </section>
      )}

      {/* Featured Languages — peek scroll on mobile, stagger on desktop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Popular Courses</h2>
            <p className="text-text-secondary mt-1 text-sm">Start with the most popular languages</p>
          </div>
          <Link
            to="/courses"
            className="text-sm text-accent-blue hover:text-blue-400 font-medium flex items-center gap-1 btn-press"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile: horizontal scroll with peek */}
        <div className="sm:hidden scroll-peek -mx-4 px-4">
          {featured.map((lang) => (
            <Link
              key={lang.id}
              to={`/language/${lang.id}`}
              className="card-glow group p-5 bg-surface-800 rounded-2xl w-[280px] flex-shrink-0"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{lang.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                    {lang.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 line-clamp-2">{lang.description}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs text-text-muted">{lang.totalLessons} lessons</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-surface-700 text-text-secondary">
                      {lang.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: grid with stagger */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {featured.map((lang) => {
            const completed = getLanguageProgress(lang.id)
            const pct = lang.totalLessons > 0 ? Math.round((completed / lang.totalLessons) * 100) : 0

            return (
              <Link
                key={lang.id}
                to={`/language/${lang.id}`}
                className="card-glow group p-5 bg-surface-800 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{lang.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                      {lang.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1 line-clamp-2">{lang.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs text-text-muted">{lang.totalLessons} lessons</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-surface-700 text-text-secondary">
                        {lang.difficulty}
                      </span>
                    </div>
                    {/* Progress peek */}
                    {completed > 0 && (
                      <div className="mt-3">
                        <div className="w-full h-1.5 bg-surface-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent-green to-accent-blue rounded-full progress-animated" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-[10px] text-text-muted mt-1 inline-block">{pct}% complete</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why Abhyas — features with subtle animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-surface-700">
        <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">Why Abhyas?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger-children">
          <div className="text-center p-6 rounded-2xl hover:bg-surface-800/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen size={26} className="text-accent-blue" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2 text-lg">Bite-sized Lessons</h3>
            <p className="text-sm text-text-secondary leading-relaxed">Each lesson takes 5-10 minutes. Theory, practice, and quiz in one go.</p>
          </div>
          <div className="text-center p-6 rounded-2xl hover:bg-surface-800/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
              <Swords size={26} className="text-accent-green" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2 text-lg">Arena Challenges</h3>
            <p className="text-sm text-text-secondary leading-relaxed">Test your skills with language-specific coding challenges and puzzles.</p>
          </div>
          <div className="text-center p-6 rounded-2xl hover:bg-surface-800/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={26} className="text-accent-purple" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2 text-lg">Track Progress</h3>
            <p className="text-sm text-text-secondary leading-relaxed">XP, streaks, and detailed progress tracking across all languages.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
