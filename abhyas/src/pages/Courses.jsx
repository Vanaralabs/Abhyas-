import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Code2, ChevronRight } from 'lucide-react'
import { getAllCourses } from '../data/courses'
import { useStore } from '../utils/store'

export default function Courses() {
  const allCourses = getAllCourses()
  const { progress } = useStore()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          All <span className="text-neon-cyan">Courses</span>
        </h1>
        <p className="text-gray-400 text-lg">
          {allCourses.length} interactive courses. Pick a language and start coding.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course, i) => {
          const courseProgress = progress[course.id]
          const completedLessons = courseProgress ? Object.keys(courseProgress).length : 0
          const totalLessons = course.lessons.length
          const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/course/${course.id}`}
                className="block glass-card rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl h-full"
              >
                {/* Icon & Language */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-white/5">
                    {course.icon}
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-gray-600 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all"
                  />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} />
                    {totalLessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Code2 size={12} />
                    ~{course.estimatedHours}h
                  </span>
                </div>

                {/* Progress Bar */}
                {completedLessons > 0 && (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">{completedLessons}/{totalLessons} lessons</span>
                      <span className="text-neon-cyan">{percent}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
