import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import Lesson from './pages/Lesson'
import Arena from './pages/Arena'
import Progress from './pages/Progress'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 mesh-gradient relative">
      {/* Background Orbs */}
      <div className="floating-orb w-96 h-96 bg-neon-cyan/10 top-0 -left-48" />
      <div className="floating-orb w-80 h-80 bg-neon-purple/10 top-1/3 -right-40" />
      <div className="floating-orb w-64 h-64 bg-neon-pink/5 bottom-0 left-1/4" />
      
      <Navbar />
      <main className="relative z-10 pt-24">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/course/:courseId/lesson/:lessonId" element={<Lesson />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}
