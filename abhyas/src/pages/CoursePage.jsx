import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, CheckCircle2, Lock, BookOpen, Code2 } from 'lucide-react'
import { getCourse } from '../data/courses'
import { useStore } from '../utils/store'

export default function CoursePage() {
  const { courseId } = useParams()
  const course = getCourse(courseId)
  const { progress } = useStore()

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Course not found</h1>
        <Link to="/courses" className="text-neon-cyan hover:underline">← Back to courses</Link>
      </div>
    )
  }

  const courseProgress = progress[courseId] || {}
  const completedCount = Object.keys(courseProgress).length
  const totalLessons = course.lessons.length
  const percent = Math.round((completedCount / totalLessons) * 100)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <Link to="/courses" className="text-sm text-gray-500 hover:text-neon-cyan mb-4 inline-block">
          ← All Courses
        </Link>

        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-white/5 shrink-0">
            {course.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-400 mb-4">{course.description}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1"><BookOpen size={14} /> {totalLessons} lessons</span>
              <span className="flex items-center gap-1"><Code2 size={14} /> ~{course.estimatedHours} hours</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        {completedCount > 0 && (
          <div className="mt-6 glass-card rounded-xl p-4 border border-white/5">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Progress</span>
              <span className="text-neon-cyan font-semibold">{percent}% complete</span>
            </div>
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">{completedCount} of {totalLessons} lessons completed</p>
          </div>
        )}
      </motion.div>

      {/* Lesson List */}
      <div className="space-y-2">
        {course.lessons.map((lesson, idx) => {
          const isCompleted = courseProgress[lesson.id]
          const isUnlocked = idx === 0 || courseProgress[course.lessons[idx - 1]?.id]

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
            >
              <Link
                to={isUnlocked ? `/course/${courseId}/lesson/${lesson.id}` : '#'}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                  isCompleted
                    ? 'glass-card border-neon-green/20 hover:border-neon-green/40'
                    : isUnlocked
                    ? 'glass-card border-white/5 hover:border-neon-cyan/30 hover:shadow-lg'
                    : 'bg-dark-800/50 border-white/5 opacity-50 cursor-not-allowed'
                }`}
                onClick={(e) => !isUnlocked && e.preventDefault()}
              >
                {/* Status Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  isCompleted ? 'bg-neon-green/10' : isUnlocked ? 'bg-neon-cyan/10' : 'bg-dark-700'
                }`}>
                  {isCompleted ? (
                    <CheckCircle2 size={20} className="text-neon-green" />
                  ) : isUnlocked ? (
                    <Play size={16} className="text-neon-cyan" />
                  ) : (
                    <Lock size={14} className="text-gray-600" />
                  )}
                </div>

                {/* Lesson Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium ${isCompleted ? 'text-neon-green' : isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Lesson {idx + 1}
                  </p>
                </div>

                {/* XP Badge */}
                {isUnlocked && !isCompleted && (
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                    +25 XP
                  </span>
                )}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
