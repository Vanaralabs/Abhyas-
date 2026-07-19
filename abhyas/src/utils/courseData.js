// Shared course data loading and normalization
const courseModules = import.meta.glob('../data/*.js', { eager: true })

export function getCourseData(langId) {
  const key = Object.keys(courseModules).find(k => k.endsWith(`/${langId}.js`))
  if (!key) return null

  const raw = courseModules[key].default
  if (!raw) return null

  // Normalize data: ensure sections → chapters → lessons structure
  const normalized = { ...raw }
  normalized.sections = (raw.sections || []).map(section => {
    if (section.chapters) return section
    if (section.modules) return { ...section, chapters: section.modules }
    if (section.lessons) return { ...section, chapters: [{ id: section.id, title: section.title, lessons: section.lessons }] }
    return { ...section, chapters: [] }
  })
  return normalized
}

// Find a lesson by sectionId + lessonSlug in the course
export function findLesson(course, sectionId, lessonSlug) {
  if (!course) return { lesson: null, section: null, chapter: null, prevLesson: null, nextLesson: null }

  const allLessons = []
  course.sections.forEach(section => {
    section.chapters.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        allLessons.push({ lesson, section, chapter })
      })
    })
  })

  const idx = allLessons.findIndex(
    item => item.section.id === sectionId && item.lesson.id === lessonSlug
  )

  if (idx === -1) return { lesson: null, section: null, chapter: null, prevLesson: null, nextLesson: null }

  return {
    ...allLessons[idx],
    prevLesson: idx > 0 ? allLessons[idx - 1] : null,
    nextLesson: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
  }
}

// Get Monaco language ID from our langId
export function getMonacoLanguage(langId) {
  const map = {
    python: 'python',
    javascript: 'javascript',
    typescript: 'typescript',
    html: 'html',
    css: 'css',
    cpp: 'cpp',
    java: 'java',
    sql: 'sql',
    r: 'r',
    git: 'shell',
    docker: 'dockerfile',
    'ai-prompts': 'plaintext',
  }
  return map[langId] || 'plaintext'
}
