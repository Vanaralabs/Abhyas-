import { useParams, Link, useNavigate } from 'react-router-dom'
import { useStore } from '../utils/store'
import { useState, useMemo, useCallback, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { CheckCircle2, Play, RotateCcw, ChevronLeft, ChevronRight, Lightbulb, BookOpen, Code2, HelpCircle } from 'lucide-react'

// Dynamic import map for course data
const courseModules = import.meta.glob('../data/*.js', { eager: true })

function getCourseData(langId) {
  const key = Object.keys(courseModules).find(k => k.includes(`/${langId}.js`))
  const key = Object.keys(courseModules).find(k => k.endsWith(`/${langId}.js`))
  if (key) {
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
  return null
}

// Find a lesson by sectionId + lessonSlug in the course
function findLesson(course, sectionId, lessonSlug) {
  if (!course) return { lesson: null, section: null, chapter: null, prevLesson: null, nextLesson: null }

  // Flatten all lessons with navigation info
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

// Code execution engine
function executeCode(code, langId) {
  try {
    if (langId === 'javascript' || langId === 'typescript') {
      // Actual JS execution
      const logs = []
      const mockConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
        error: (...args) => logs.push(args.map(a => String(a)).join(' ')),
        warn: (...args) => logs.push(args.map(a => String(a)).join(' ')),
      }
      const fn = new Function('console', code)
      fn(mockConsole)
      return { output: logs.join('\n'), error: null }
    } else {
      // Simulated execution for Python and others: parse print() statements
      return simulatePrintOutput(code, langId)
    }
  } catch (err) {
    return { output: '', error: err.message }
  }
}

function simulatePrintOutput(code, langId) {
  const lines = code.split('\n')
  const outputs = []

  // Track variables for basic substitution
  const vars = {}

  for (const line of lines) {
    const trimmed = line.trim()

    // Skip comments and empty lines
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//')) continue

    // Simple variable assignment: var = value
    const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/)
    if (assignMatch && !trimmed.includes('print') && !trimmed.includes('console.log')) {
      const [, varName, rawValue] = assignMatch
      // Don't process if/elif/else/for/while
      if (['if', 'elif', 'else', 'for', 'while', 'def', 'class'].includes(varName)) continue
      let value = rawValue.trim()
      // Evaluate simple expressions
      value = evaluateSimple(value, vars)
      vars[varName] = value
      continue
    }

    // Print statement parsing for Python
    const printMatch = trimmed.match(/^print\s*\((.+)\)\s*$/)
    if (printMatch) {
      let content = printMatch[1].trim()
      outputs.push(evaluatePrintContent(content, vars))
      continue
    }

    // cout for C++
    const coutMatch = trimmed.match(/cout\s*<<\s*(.+?)(?:\s*<<\s*endl)?\s*;?\s*$/)
    if (coutMatch) {
      let content = coutMatch[1]
      // Handle chained <<
      const parts = content.split('<<').map(p => p.trim())
      const result = parts.map(p => evaluateSimple(p, vars)).join('')
      outputs.push(result)
      continue
    }

    // System.out.println for Java
    const javaMatch = trimmed.match(/System\.out\.println\s*\((.+)\)\s*;?\s*$/)
    if (javaMatch) {
      let content = javaMatch[1].trim()
      outputs.push(evaluatePrintContent(content, vars))
      continue
    }

    // printf for C++
    const printfMatch = trimmed.match(/printf\s*\(\s*"(.+?)"\s*\)\s*;?\s*$/)
    if (printfMatch) {
      outputs.push(printfMatch[1].replace(/\\n/g, ''))
      continue
    }
  }

  return { output: outputs.join('\n'), error: null }
}

function evaluateSimple(value, vars) {
  // Remove trailing comments
  value = value.split('#')[0].trim()

  // String literal
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1)
  }
  // Number
  if (!isNaN(value) && value !== '') {
    return value
  }
  // Boolean
  if (value === 'True' || value === 'true') return 'True'
  if (value === 'False' || value === 'false') return 'False'
  // Variable reference
  if (vars[value] !== undefined) return vars[value]
  // Simple arithmetic
  try {
    // Replace variable names with values
    let expr = value
    Object.entries(vars).forEach(([k, v]) => {
      expr = expr.replace(new RegExp(`\\b${k}\\b`, 'g'), isNaN(v) ? `"${v}"` : v)
    })
    const result = Function(`"use strict"; return (${expr})`)()
    return String(result)
  } catch {
    return value
  }
}

function evaluatePrintContent(content, vars) {
  // Handle f-strings (basic)
  if (content.startsWith('f"') || content.startsWith("f'")) {
    let str = content.slice(2, -1)
    str = str.replace(/\{(\w+)\}/g, (_, varName) => vars[varName] || varName)
    return str
  }

  // Handle type() calls
  const typeMatch = content.match(/^type\((.+)\)$/)
  if (typeMatch) {
    const arg = typeMatch[1].trim()
    const val = evaluateSimple(arg, vars)
    if (!isNaN(val) && val !== '' && !val.includes('.')) return "<class 'int'>"
    if (!isNaN(val) && val.includes('.')) return "<class 'float'>"
    if (val === 'True' || val === 'False') return "<class 'bool'>"
    return "<class 'str'>"
  }

  // Handle concatenation with +
  if (content.includes('+')) {
    const parts = content.split('+').map(p => evaluateSimple(p.trim(), vars))
    return parts.join('')
  }

  // Handle comma-separated print args
  if (content.includes(',')) {
    const parts = content.split(',').map(p => evaluateSimple(p.trim(), vars))
    return parts.join(' ')
  }

  return evaluateSimple(content, vars)
}

// Get Monaco language ID from our langId
function getMonacoLanguage(langId) {
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

export default function Lesson() {
  const { langId, sectionId, lessonSlug } = useParams()
  const navigate = useNavigate()
  const { completeLesson, isLessonCompleted } = useStore()

  const course = useMemo(() => getCourseData(langId), [langId])
  const { lesson, section, chapter, prevLesson, nextLesson } = useMemo(
    () => findLesson(course, sectionId, lessonSlug),
    [course, sectionId, lessonSlug]
  )

  const [activeTab, setActiveTab] = useState('theory')
  const [code, setCode] = useState(lesson?.challenge?.starterCode || '')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const editorRef = useRef(null)

  const completed = lesson ? isLessonCompleted(langId, sectionId, lesson.id) : false

  // Reset state when lesson changes
  useMemo(() => {
    if (lesson) {
      setCode(lesson.challenge?.starterCode || '')
      setOutput('')
      setError('')
      setIsCorrect(false)
      setShowHints(false)
      setQuizAnswers({})
      setQuizSubmitted(false)
      setActiveTab('theory')
    }
  }, [lessonSlug])

  const handleRunCode = useCallback(() => {
    if (!lesson?.challenge) return
    setError('')
    setIsCorrect(false)

    const result = executeCode(code, langId)

    if (result.error) {
      setError(result.error)
      setOutput('')
      return
    }

    setOutput(result.output)

    // Check if output matches expected
    const expected = lesson.challenge.expectedOutput.trim()
    const actual = result.output.trim()

    if (actual === expected) {
      setIsCorrect(true)
      if (!completed) {
        completeLesson(langId, sectionId, lesson.id)
      }
    }
  }, [code, langId, lesson, completed, sectionId, completeLesson])

  const handleResetCode = () => {
    setCode(lesson?.challenge?.starterCode || '')
    setOutput('')
    setError('')
    setIsCorrect(false)
  }

  const handleQuizSubmit = () => {
    if (!lesson?.quiz) return
    setQuizSubmitted(true)

    // Check if all answers are correct
    const allCorrect = lesson.quiz.every((q, i) => quizAnswers[i] === q.correct)
    if (allCorrect && !completed) {
      completeLesson(langId, sectionId, lesson.id)
    }
  }

  const quizScore = useMemo(() => {
    if (!lesson?.quiz || !quizSubmitted) return 0
    return lesson.quiz.filter((q, i) => quizAnswers[i] === q.correct).length
  }, [quizSubmitted, quizAnswers, lesson])

  if (!lesson) {
    return (
      <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Lesson Not Found</h1>
        <p className="text-text-secondary mb-6">This lesson doesn't exist yet.</p>
        <Link
          to={`/language/${langId}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-700 text-text-primary rounded-lg hover:bg-surface-600 transition-colors"
        >
          ← Back to Course
        </Link>
      </div>
    )
  }

  const tabs = [
    { id: 'theory', label: 'Theory', icon: BookOpen },
    ...(lesson.challenge ? [{ id: 'code', label: 'Code', icon: Code2 }] : []),
    ...(lesson.quiz && lesson.quiz.length > 0 ? [{ id: 'quiz', label: 'Quiz', icon: HelpCircle }] : []),
  ]

  return (
    <div className="page-transition max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-4 flex-wrap">
        <Link to={`/language/${langId}`} className="hover:text-text-secondary transition-colors">
          {course?.title}
        </Link>
        <span>/</span>
        <span className="text-text-secondary">{section?.title}</span>
        <span>/</span>
        <span className="text-text-secondary">{chapter?.title}</span>
      </div>

      {/* Lesson Title */}
      <div className="flex items-center gap-3 mb-6">
        {completed && <CheckCircle2 size={22} className="text-accent-green flex-shrink-0" />}
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{lesson.title}</h1>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 border-b border-surface-700 overflow-x-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === id
                ? 'border-accent-blue text-accent-blue'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {/* THEORY TAB */}
        {activeTab === 'theory' && (
          <div className="max-w-3xl">
            <div
              className="theory-content"
              dangerouslySetInnerHTML={{ __html: lesson.theory }}
            />
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-surface-700">
              {lesson.challenge && (
                <button
                  onClick={() => setActiveTab('code')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-white font-medium rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <Code2 size={16} />
                  Try the Challenge
                </button>
              )}
              {!lesson.challenge && lesson.quiz && (
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-purple text-white font-medium rounded-lg hover:bg-purple-500 transition-colors"
                >
                  <HelpCircle size={16} />
                  Take the Quiz
                </button>
              )}
            </div>
          </div>
        )}

        {/* CODE TAB */}
        {activeTab === 'code' && lesson.challenge && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left: Instructions */}
            <div className="space-y-4">
              <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
                <h3 className="font-semibold text-text-primary mb-2">Challenge</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {lesson.challenge.description}
                </p>
              </div>

              {/* Expected Output */}
              <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
                <h4 className="text-sm font-medium text-text-muted mb-2">Expected Output</h4>
                <pre className="text-sm font-mono text-accent-green bg-surface-900 p-3 rounded-lg">
                  {lesson.challenge.expectedOutput}
                </pre>
              </div>

              {/* Hints */}
              {lesson.challenge.hints && lesson.challenge.hints.length > 0 && (
                <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center gap-2 text-sm font-medium text-accent-orange hover:text-orange-300 transition-colors"
                  >
                    <Lightbulb size={16} />
                    {showHints ? 'Hide Hints' : 'Show Hints'}
                  </button>
                  {showHints && (
                    <ul className="mt-3 space-y-2">
                      {lesson.challenge.hints.map((hint, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-accent-orange flex-shrink-0">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Right: Editor + Output */}
            <div className="space-y-4">
              {/* Editor */}
              <div className="rounded-xl overflow-hidden border border-surface-700">
                <div className="flex items-center justify-between px-4 py-2 bg-surface-800 border-b border-surface-700">
                  <span className="text-xs text-text-muted font-mono">{langId}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResetCode}
                      className="p-1.5 text-text-muted hover:text-text-secondary transition-colors"
                      title="Reset code"
                    >
                      <RotateCcw size={14} />
                    </button>
                    <button
                      onClick={handleRunCode}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-green text-surface-900 text-xs font-semibold rounded-md hover:bg-green-300 transition-colors"
                    >
                      <Play size={12} />
                      Run
                    </button>
                  </div>
                </div>
                <Editor
                  height="280px"
                  language={getMonacoLanguage(langId)}
                  value={code}
                  onChange={(val) => setCode(val || '')}
                  onMount={(editor) => { editorRef.current = editor }}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    padding: { top: 12, bottom: 12 },
                    renderLineHighlight: 'line',
                    wordWrap: 'on',
                    tabSize: 4,
                    insertSpaces: true,
                    automaticLayout: true,
                  }}
                />
              </div>

              {/* Output */}
              <div className="rounded-xl border border-surface-700 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-800 border-b border-surface-700">
                  <span className="text-xs text-text-muted">Output</span>
                  {isCorrect && (
                    <span className="flex items-center gap-1 text-xs text-accent-green font-medium">
                      <CheckCircle2 size={12} />
                      Correct!
                    </span>
                  )}
                </div>
                <div className="p-4 bg-surface-900 min-h-[100px] max-h-[200px] overflow-auto">
                  {error ? (
                    <pre className="text-sm font-mono text-accent-red whitespace-pre-wrap">{error}</pre>
                  ) : output ? (
                    <pre className="text-sm font-mono text-text-primary whitespace-pre-wrap">{output}</pre>
                  ) : (
                    <span className="text-sm text-text-muted">Run your code to see output...</span>
                  )}
                </div>
              </div>

              {/* Success message */}
              {isCorrect && (
                <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent-green" />
                    <span className="font-semibold text-accent-green">Challenge Complete!</span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">+25 XP earned</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && lesson.quiz && (
          <div className="max-w-2xl space-y-6">
            {lesson.quiz.map((q, qIdx) => {
              const selected = quizAnswers[qIdx]
              const isAnswerCorrect = quizSubmitted && selected === q.correct
              const isAnswerWrong = quizSubmitted && selected !== undefined && selected !== q.correct

              return (
                <div key={qIdx} className="p-5 bg-surface-800 rounded-xl border border-surface-700">
                  <p className="font-medium text-text-primary mb-4">
                    {qIdx + 1}. {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((option, oIdx) => {
                      const isSelected = selected === oIdx
                      const isCorrectAnswer = q.correct === oIdx

                      let optionClass = 'border-surface-600 hover:border-surface-500 hover:bg-surface-700/50'
                      if (quizSubmitted) {
                        if (isCorrectAnswer) {
                          optionClass = 'border-accent-green/50 bg-accent-green/5'
                        } else if (isSelected && !isCorrectAnswer) {
                          optionClass = 'border-accent-red/50 bg-accent-red/5'
                        } else {
                          optionClass = 'border-surface-600 opacity-50'
                        }
                      } else if (isSelected) {
                        optionClass = 'border-accent-blue bg-accent-blue/5'
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => {
                            if (!quizSubmitted) {
                              setQuizAnswers({ ...quizAnswers, [qIdx]: oIdx })
                            }
                          }}
                          disabled={quizSubmitted}
                          className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${optionClass}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium flex-shrink-0 ${
                              isSelected && !quizSubmitted ? 'border-accent-blue text-accent-blue' :
                              quizSubmitted && isCorrectAnswer ? 'border-accent-green text-accent-green' :
                              quizSubmitted && isSelected ? 'border-accent-red text-accent-red' :
                              'border-surface-500 text-text-muted'
                            }`}>
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className={`${
                              quizSubmitted && isCorrectAnswer ? 'text-accent-green' :
                              quizSubmitted && isSelected && !isCorrectAnswer ? 'text-accent-red' :
                              'text-text-primary'
                            }`}>
                              {option}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {!quizSubmitted ? (
              <button
                onClick={handleQuizSubmit}
                disabled={Object.keys(quizAnswers).length < lesson.quiz.length}
                className="px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Answers
              </button>
            ) : (
              <div className={`p-4 rounded-xl border ${
                quizScore === lesson.quiz.length
                  ? 'bg-accent-green/10 border-accent-green/20'
                  : 'bg-accent-orange/10 border-accent-orange/20'
              }`}>
                <p className="font-semibold text-text-primary">
                  Score: {quizScore}/{lesson.quiz.length}
                  {quizScore === lesson.quiz.length && ' — Perfect! +25 XP'}
                </p>
                {quizScore < lesson.quiz.length && (
                  <p className="text-sm text-text-secondary mt-1">
                    Review the correct answers above and try again next time.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-surface-700">
        {prevLesson ? (
          <Link
            to={`/language/${langId}/${prevLesson.section.id}/${prevLesson.lesson.id}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ChevronLeft size={16} />
            {prevLesson.lesson.title}
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            to={`/language/${langId}/${nextLesson.section.id}/${nextLesson.lesson.id}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-accent-blue hover:text-blue-400 transition-colors"
          >
            {nextLesson.lesson.title}
            <ChevronRight size={16} />
          </Link>
        ) : (
          <Link
            to={`/language/${langId}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-accent-green hover:text-green-300 transition-colors"
          >
            Back to Course
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
