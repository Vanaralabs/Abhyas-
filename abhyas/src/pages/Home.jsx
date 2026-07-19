import { Link } from 'react-router-dom'
import { useStore } from '../utils/store'
import { ArrowRight, BookOpen, Swords, TrendingUp, Zap, Play } from 'lucide-react'
import languages from '../data/languages'
import { getCourseData } from '../utils/courseData'

export default function Home() {
  const { xp, streak, level, getTotalCompleted, isLessonCompleted, getLanguageProgress } = useStore()
  const totalCompleted = getTotalCompleted()

  // Show first 6 languages as featured
  const featured = languages.slice(0, 6)

  // Find next lesson to continue learning
  const continueLesson = (() => {
    // Check languages that have progress first
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

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Learn to code,{' '}
              <span className="text-accent-blue">one lesson</span>{' '}
              at a time.
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-xl leading-relaxed">
              Master 12 programming languages with bite-sized lessons, interactive challenges, and real coding practice. Free forever.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/arena"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-700 text-text-primary font-semibold rounded-lg hover:bg-surface-600 transition-colors"
              >
                <Swords size={18} />
                Arena
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      {totalCompleted > 0 && (
        <section className="border-y border-surface-700 bg-surface-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-700">
                  <Zap size={20} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-xl font-bold text-text-primary">{xp}</p>
                  <p className="text-xs text-text-muted">Total XP</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-700">
                  <span className="text-lg">🔥</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-text-primary">{streak}</p>
                  <p className="text-xs text-text-muted">Day Streak</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-700">
                  <BookOpen size={20} className="text-accent-green" />
                </div>
                <div>
                  <p className="text-xl font-bold text-text-primary">{totalCompleted}</p>
                  <p className="text-xs text-text-muted">Lessons Done</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-700">
                  <TrendingUp size={20} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-xl font-bold text-text-primary">Lv. {level}</p>
                  <p className="text-xs text-text-muted">Current Level</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Continue Learning */}
      {continueLesson && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <Link
            to={`/language/${continueLesson.lang.id}/${continueLesson.section.id}/${continueLesson.lesson.id}`}
            className="group flex items-center gap-4 p-5 bg-surface-800 rounded-xl border border-surface-700 hover:border-accent-blue/50 transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors">
              <Play size={22} className="text-accent-blue" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-accent-blue font-medium mb-0.5">Continue Learning</p>
              <p className="text-text-primary font-semibold truncate">{continueLesson.lesson.title}</p>
              <p className="text-xs text-text-muted mt-0.5">{continueLesson.course.title} — {continueLesson.section.title}</p>
            </div>
            <ArrowRight size={18} className="text-text-muted group-hover:text-accent-blue transition-colors flex-shrink-0" />
          </Link>
        </section>
      )}

      {/* Featured Languages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Popular Courses</h2>
            <p className="text-text-secondary mt-1">Start with the most popular languages</p>
          </div>
          <Link
            to="/courses"
            className="text-sm text-accent-blue hover:text-blue-400 font-medium flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((lang) => (
            <Link
              key={lang.id}
              to={`/language/${lang.id}`}
              className="group p-5 bg-surface-800 rounded-xl border border-surface-700 hover:border-surface-600 transition-all hover:translate-y-[-2px]"
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
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-surface-700">
        <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Why Abhyas?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen size={24} className="text-accent-blue" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Bite-sized Lessons</h3>
            <p className="text-sm text-text-secondary">Each lesson takes 5-10 minutes. Theory, practice, and quiz in one go.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
              <Swords size={24} className="text-accent-green" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Arena Challenges</h3>
            <p className="text-sm text-text-secondary">Test your skills with language-specific coding challenges and puzzles.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={24} className="text-accent-purple" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Track Progress</h3>
            <p className="text-sm text-text-secondary">XP, streaks, and detailed progress tracking across all languages.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
