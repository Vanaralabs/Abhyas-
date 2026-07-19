import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Languages from './pages/Languages'
import LanguageCourse from './pages/LanguageCourse'
import Lesson from './pages/Lesson'
import Arena from './pages/Arena'
import Progress from './pages/Progress'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-900">
      <Navbar />
      <main className="pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Languages />} />
          <Route path="/language/:langId" element={<LanguageCourse />} />
          <Route path="/language/:langId/:sectionId/:lessonSlug" element={<Lesson />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </main>
    </div>
  )
}
