import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Languages from './pages/Languages'
import LanguageCourse from './pages/LanguageCourse'

// Lazy load heavy pages (Monaco Editor)
const Lesson = lazy(() => import('./pages/Lesson'))
const Arena = lazy(() => import('./pages/Arena'))
const Progress = lazy(() => import('./pages/Progress'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-surface-600 border-t-accent-blue rounded-full animate-spin" />
        <span className="text-sm text-text-muted">Loading...</span>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
      <div className="text-6xl mb-4">404</div>
      <h1 className="text-2xl font-bold text-text-primary mb-2">Page Not Found</h1>
      <p className="text-text-secondary mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-blue-500 transition-colors"
      >
        ← Back to Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent-blue focus:text-white focus:rounded-lg">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-14">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Languages />} />
              <Route path="/language/:langId" element={<LanguageCourse />} />
              <Route path="/language/:langId/:sectionId/:lessonSlug" element={<Lesson />} />
              <Route path="/arena" element={<Arena />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}
