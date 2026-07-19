import { useParams, Link, useNavigate } from 'react-router-dom'
import { useStore } from '../utils/store'
import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { CheckCircle2, Play, RotateCcw, ChevronLeft, ChevronRight, Lightbulb, BookOpen, Code2, HelpCircle, Loader2 } from 'lucide-react'
import { getCourseData, findLesson, getMonacoLanguage } from '../utils/courseData'
import { executeCode } from '../utils/codeRunner'

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
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const editorRef = useRef(null)

  const completed = lesson ? isLessonCompleted(langId, sectionId, lesson.id) : false

  // Reset state when lesson changes (useEffect, not useMemo)
  useEffect(() => {
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
  }, [lessonSlug, lesson])

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

  // Keyboard shortcut: Ctrl+Enter to run code
  const handleEditorKeyDown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleRunCode()
    }
  }, [handleRunCode])

  const handleQuizSubmit = () => {
    if (!lesson?.quiz) return
    setQuizSubmitted(true)

    const allCorrect = lesson.quiz.every((q, i) => quizAnswers[i] === q.correct)
    if (allCorrect && !completed) {
      completeLesson(langId, sectionId, lesson.id)
    }
  }

  const handleQuizRetry = () => {
    setQuizAnswers({})
    setQuizSubmitted(false)
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
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-muted mb-4 flex-wrap">
        <Link to={`/language/${langId}`} className="hover:text-text-secondary transition-colors">
          {course?.title}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-text-secondary">{section?.title}</span>
        <span aria-hidden="true">/</span>
        <span className="text-text-secondary">{chapter?.title}</span>
      </nav>

      {/* Lesson Title */}
      <div className="flex items-center gap-3 mb-6">
        {completed && <CheckCircle2 size={22} className="text-accent-green flex-shrink-0" aria-label="Completed" />}
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{lesson.title}</h1>
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="Lesson sections" className="flex items-center gap-1 mb-6 border-b border-surface-700 overflow-x-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === id
                ? 'border-accent-blue text-accent-blue'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {/* THEORY TAB */}
        {activeTab === 'theory' && (
          <div id="panel-theory" role="tabpanel" aria-labelledby="tab-theory" className="max-w-3xl">
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
                  <Code2 size={16} aria-hidden="true" />
                  Try the Challenge
                </button>
              )}
              {!lesson.challenge && lesson.quiz && (
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-purple text-white font-medium rounded-lg hover:bg-purple-500 transition-colors"
                >
                  <HelpCircle size={16} aria-hidden="true" />
                  Take the Quiz
                </button>
              )}
            </div>
          </div>
        )}

        {/* CODE TAB */}
        {activeTab === 'code' && lesson.challenge && (
          <div id="panel-code" role="tabpanel" aria-labelledby="tab-code" className="grid grid-cols-1 lg:grid-cols-2 gap-4" onKeyDown={handleEditorKeyDown}>
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
                    aria-expanded={showHints}
                  >
                    <Lightbulb size={16} aria-hidden="true" />
                    {showHints ? 'Hide Hints' : 'Show Hints'}
                  </button>
                  {showHints && (
                    <ul className="mt-3 space-y-2" aria-label="Hints">
                      {lesson.challenge.hints.map((hint, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-accent-orange flex-shrink-0" aria-hidden="true">•</span>
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
                    <span className="text-[10px] text-text-muted hidden sm:inline">Ctrl+Enter to run</span>
                    <button
                      onClick={handleResetCode}
                      className="p-1.5 text-text-muted hover:text-text-secondary transition-colors"
                      title="Reset code"
                      aria-label="Reset code"
                    >
                      <RotateCcw size={14} />
                    </button>
                    <button
                      onClick={handleRunCode}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-green text-surface-900 text-xs font-semibold rounded-md hover:bg-green-300 transition-colors"
                      aria-label="Run code"
                    >
                      <Play size={12} aria-hidden="true" />
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
                  loading={
                    <div className="flex items-center justify-center h-[280px] bg-surface-900">
                      <Loader2 size={24} className="animate-spin text-text-muted" />
                      <span className="ml-2 text-sm text-text-muted">Loading editor...</span>
                    </div>
                  }
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
              <div className="rounded-xl border border-surface-700 overflow-hidden" role="status" aria-live="polite">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-800 border-b border-surface-700">
                  <span className="text-xs text-text-muted">Output</span>
                  {isCorrect && (
                    <span className="flex items-center gap-1 text-xs text-accent-green font-medium">
                      <CheckCircle2 size={12} aria-hidden="true" />
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
                <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-xl" role="alert">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent-green" aria-hidden="true" />
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
          <div id="panel-quiz" role="tabpanel" aria-labelledby="tab-quiz" className="max-w-2xl space-y-6">
            {lesson.quiz.map((q, qIdx) => {
              const selected = quizAnswers[qIdx]
              const isAnswerCorrect = quizSubmitted && selected === q.correct
              const isAnswerWrong = quizSubmitted && selected !== undefined && selected !== q.correct

              return (
                <fieldset key={qIdx} className="p-5 bg-surface-800 rounded-xl border border-surface-700">
                  <legend className="font-medium text-text-primary mb-4 float-left w-full">
                    {qIdx + 1}. {q.question}
                  </legend>
                  <div className="space-y-2 clear-both" role="radiogroup" aria-label={`Question ${qIdx + 1}`}>
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
                          role="radio"
                          aria-checked={isSelected}
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
                </fieldset>
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
              }`} role="alert">
                <p className="font-semibold text-text-primary">
                  Score: {quizScore}/{lesson.quiz.length}
                  {quizScore === lesson.quiz.length && ' — Perfect! +25 XP'}
                </p>
                {quizScore < lesson.quiz.length && (
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-sm text-text-secondary">
                      Review the correct answers above.
                    </p>
                    <button
                      onClick={handleQuizRetry}
                      className="text-sm font-medium text-accent-blue hover:text-blue-400 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav aria-label="Lesson navigation" className="flex items-center justify-between mt-10 pt-6 border-t border-surface-700">
        {prevLesson ? (
          <Link
            to={`/language/${langId}/${prevLesson.section.id}/${prevLesson.lesson.id}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ChevronLeft size={16} aria-hidden="true" />
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
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to={`/language/${langId}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-accent-green hover:text-green-300 transition-colors"
          >
            Back to Course
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        )}
      </nav>
    </div>
  )
}
