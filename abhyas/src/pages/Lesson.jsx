import { useParams, Link } from 'react-router-dom'
import { useStore } from '../utils/store'
import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { CheckCircle2, Play, RotateCcw, ChevronLeft, ChevronRight, Lightbulb, BookOpen, Code2, HelpCircle, Loader2, Sparkles } from 'lucide-react'
import { getCourseData, findLesson, getMonacoLanguage } from '../utils/courseData'
import { executeCode } from '../utils/codeRunner'
import { highlightTheoryCode } from '../utils/syntaxHighlight'

export default function Lesson() {
  const { langId, sectionId, lessonSlug } = useParams()
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
  const [shakeError, setShakeError] = useState(false)
  const [goldFlash, setGoldFlash] = useState(false)
  const editorRef = useRef(null)

  const completed = lesson ? isLessonCompleted(langId, sectionId, lesson.id) : false

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
      setShakeError(false)
      setGoldFlash(false)
    }
  }, [lessonSlug, lesson])

  const handleRunCode = useCallback(() => {
    if (!lesson?.challenge) return
    setError('')
    setIsCorrect(false)
    setShakeError(false)

    const result = executeCode(code, langId)

    if (result.error) {
      setError(result.error)
      setOutput('')
      setShakeError(true)
      setTimeout(() => setShakeError(false), 500)
      return
    }

    setOutput(result.output)

    const expected = lesson.challenge.expectedOutput.trim()
    const actual = result.output.trim()

    if (actual === expected) {
      setIsCorrect(true)
      setGoldFlash(true)
      setTimeout(() => setGoldFlash(false), 1000)
      if (!completed) {
        completeLesson(langId, sectionId, lesson.id)
      }
    } else {
      setShakeError(true)
      setTimeout(() => setShakeError(false), 500)
    }
  }, [code, langId, lesson, completed, sectionId, completeLesson])

  const handleResetCode = () => {
    setCode(lesson?.challenge?.starterCode || '')
    setOutput('')
    setError('')
    setIsCorrect(false)
  }

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
      setGoldFlash(true)
      setTimeout(() => setGoldFlash(false), 1000)
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

  // Highlighted theory HTML
  const theoryHtml = useMemo(() => {
    if (!lesson?.theory) return ''
    return highlightTheoryCode(lesson.theory)
  }, [lesson])

  if (!lesson) {
    return (
      <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Lesson Not Found</h1>
        <p className="text-text-secondary mb-6">This lesson doesn't exist yet.</p>
        <Link
          to={`/language/${langId}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-700 text-text-primary rounded-xl hover:bg-surface-600 transition-colors btn-press"
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
    <div className={`page-transition max-w-6xl mx-auto px-4 sm:px-6 py-6 ${goldFlash ? 'gold-flash' : ''}`}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-muted mb-4 flex-wrap">
        <Link to={`/language/${langId}`} className="hover:text-accent-blue transition-colors">
          {course?.title}
        </Link>
        <span aria-hidden="true" className="text-surface-600">/</span>
        <span className="text-text-secondary">{section?.title}</span>
        <span aria-hidden="true" className="text-surface-600">/</span>
        <span className="text-text-primary font-medium">{chapter?.title}</span>
      </nav>

      {/* Lesson Title */}
      <div className="flex items-center gap-3 mb-6">
        {completed && (
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent-green/10">
            <CheckCircle2 size={18} className="text-accent-green" aria-label="Completed" />
          </div>
        )}
        <h1 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">{lesson.title}</h1>
      </div>

      {/* Tabs — with active indicator animation */}
      <div role="tablist" aria-label="Lesson sections" className="flex items-center gap-1 mb-6 border-b border-surface-700 overflow-x-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap btn-press ${
              activeTab === id
                ? 'border-accent-blue text-accent-blue tab-active-indicator'
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
              dangerouslySetInnerHTML={{ __html: theoryHtml }}
            />

            {/* Challenge preview peek — Zeigarnik effect */}
            {lesson.challenge && (
              <div className="mt-8 pt-6 border-t border-surface-700">
                <div className="relative">
                  <div className="p-4 bg-surface-800/80 rounded-2xl border border-surface-700 fade-mask-bottom">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 size={16} className="text-accent-blue" />
                      <span className="text-xs font-semibold text-accent-blue uppercase tracking-wide">Challenge Preview</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="text-text-primary font-semibold">{lesson.challenge.description.split('.')[0]}.</span>
                      {lesson.challenge.description.split('.').slice(1).join('.')}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('code')}
                    className="mt-3 btn-gradient btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-sm"
                  >
                    <Code2 size={16} aria-hidden="true" />
                    Try the Challenge
                  </button>
                </div>
              </div>
            )}
            {!lesson.challenge && lesson.quiz && (
              <div className="mt-8 pt-6 border-t border-surface-700">
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-purple text-white font-medium rounded-xl hover:bg-purple-500 transition-colors btn-press"
                >
                  <HelpCircle size={16} aria-hidden="true" />
                  Take the Quiz
                </button>
              </div>
            )}
          </div>
        )}

        {/* CODE TAB */}
        {activeTab === 'code' && lesson.challenge && (
          <div id="panel-code" role="tabpanel" aria-labelledby="tab-code" className="grid grid-cols-1 lg:grid-cols-2 gap-4" onKeyDown={handleEditorKeyDown}>
            {/* Left: Instructions */}
            <div className="space-y-4">
              <div className="p-5 bg-surface-800 rounded-2xl border border-surface-700">
                <h3 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-accent-blue" />
                  Challenge
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  <span className="text-text-primary font-medium">{lesson.challenge.description.split('.')[0]}.</span>
                  {lesson.challenge.description.split('.').slice(1).join('.')}
                </p>
              </div>

              {/* Expected Output */}
              <div className="p-4 bg-surface-800 rounded-2xl border border-surface-700">
                <h4 className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">Expected Output</h4>
                <pre className="text-sm font-mono text-accent-green bg-surface-900 p-3 rounded-xl border border-surface-700">
                  {lesson.challenge.expectedOutput}
                </pre>
              </div>

              {/* Hints */}
              {lesson.challenge.hints && lesson.challenge.hints.length > 0 && (
                <div className="p-4 bg-surface-800 rounded-2xl border border-surface-700">
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center gap-2 text-sm font-medium text-accent-orange hover:text-orange-300 transition-colors btn-press"
                    aria-expanded={showHints}
                  >
                    <Lightbulb size={16} aria-hidden="true" />
                    {showHints ? 'Hide Hints' : 'Show Hints'}
                  </button>
                  {showHints && (
                    <ul className="mt-3 space-y-2" aria-label="Hints">
                      {lesson.challenge.hints.map((hint, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-accent-orange flex-shrink-0 font-bold" aria-hidden="true">{i + 1}.</span>
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
              <div className={`rounded-2xl overflow-hidden border transition-all ${
                isCorrect ? 'border-accent-green/50 shadow-lg shadow-accent-green/10' :
                shakeError ? 'border-accent-red/50 shake-error' :
                'border-surface-700'
              }`}>
                <div className="flex items-center justify-between px-4 py-2.5 bg-surface-800 border-b border-surface-700">
                  <span className="text-xs text-text-muted font-mono bg-surface-700 px-2 py-0.5 rounded">{langId}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-text-muted hidden sm:inline">Ctrl+Enter to run</span>
                    <button
                      onClick={handleResetCode}
                      className="p-1.5 text-text-muted hover:text-text-secondary transition-colors btn-press rounded-lg hover:bg-surface-700"
                      title="Reset code"
                      aria-label="Reset code"
                    >
                      <RotateCcw size={14} />
                    </button>
                    <button
                      onClick={handleRunCode}
                      className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg btn-press transition-all ${
                        isCorrect
                          ? 'bg-accent-green text-surface-900'
                          : 'bg-gradient-to-r from-accent-green to-emerald-400 text-surface-900 hover:shadow-lg hover:shadow-accent-green/20'
                      }`}
                      aria-label="Run code"
                    >
                      {isCorrect ? <CheckCircle2 size={12} /> : <Play size={12} />}
                      {isCorrect ? 'Passed' : 'Run'}
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
                    <div className="flex flex-col items-center justify-center h-[280px] bg-surface-900 gap-3">
                      <div className="w-full max-w-[200px] space-y-2 px-6">
                        <div className="skeleton h-3 w-3/4" />
                        <div className="skeleton h-3 w-full" />
                        <div className="skeleton h-3 w-1/2" />
                        <div className="skeleton h-3 w-5/6" />
                      </div>
                      <span className="text-xs text-text-muted">Loading editor...</span>
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
              <div className="rounded-2xl border border-surface-700 overflow-hidden" role="status" aria-live="polite">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-800 border-b border-surface-700">
                  <span className="text-xs text-text-muted font-medium">Output</span>
                  {isCorrect && (
                    <span className="flex items-center gap-1 text-xs text-accent-green font-bold animate-bounce-in">
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
                    <span className="text-sm text-text-muted italic">Run your code to see output...</span>
                  )}
                </div>
              </div>

              {/* Success celebration */}
              {isCorrect && (
                <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-2xl animate-bounce-in particle-burst active" role="alert">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent-green" aria-hidden="true" />
                    <span className="font-bold text-accent-green">Challenge Complete!</span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">+25 XP earned</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && lesson.quiz && (
          <div id="panel-quiz" role="tabpanel" aria-labelledby="tab-quiz" className="max-w-2xl space-y-5">
            {lesson.quiz.map((q, qIdx) => {
              const selected = quizAnswers[qIdx]
              const isAnswerCorrect = quizSubmitted && selected === q.correct
              const isAnswerWrong = quizSubmitted && selected !== undefined && selected !== q.correct

              return (
                <fieldset key={qIdx} className={`p-5 bg-surface-800 rounded-2xl border transition-all ${
                  quizSubmitted && isAnswerCorrect ? 'border-accent-green/30' :
                  quizSubmitted && isAnswerWrong ? 'border-accent-red/30' :
                  'border-surface-700'
                }`}>
                  <legend className="font-semibold text-text-primary mb-4 float-left w-full text-[15px]">
                    <span className="text-accent-blue mr-2">{qIdx + 1}.</span>{q.question}
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
                          optionClass = 'border-surface-600 opacity-40'
                        }
                      } else if (isSelected) {
                        optionClass = 'border-accent-blue bg-accent-blue/5 shadow-sm shadow-accent-blue/10'
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
                          className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all btn-press ${optionClass} ${
                            quizSubmitted && isCorrectAnswer ? 'animate-scale-in' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${
                              isSelected && !quizSubmitted ? 'border-accent-blue text-accent-blue bg-accent-blue/10' :
                              quizSubmitted && isCorrectAnswer ? 'border-accent-green text-accent-green bg-accent-green/10' :
                              quizSubmitted && isSelected ? 'border-accent-red text-accent-red bg-accent-red/10' :
                              'border-surface-500 text-text-muted'
                            }`}>
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className={`${
                              quizSubmitted && isCorrectAnswer ? 'text-accent-green font-medium' :
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
                className="btn-gradient btn-press px-6 py-3 rounded-xl text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-surface-600 disabled:bg-none"
              >
                Submit Answers
              </button>
            ) : (
              <div className={`p-5 rounded-2xl border animate-bounce-in ${
                quizScore === lesson.quiz.length
                  ? 'bg-accent-green/10 border-accent-green/20'
                  : 'bg-accent-orange/10 border-accent-orange/20'
              }`} role="alert">
                <p className="font-bold text-text-primary text-lg">
                  Score: {quizScore}/{lesson.quiz.length}
                  {quizScore === lesson.quiz.length && (
                    <span className="text-accent-green ml-2">Perfect! +25 XP</span>
                  )}
                </p>
                {quizScore < lesson.quiz.length && (
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-sm text-text-secondary">
                      Review the correct answers above.
                    </p>
                    <button
                      onClick={handleQuizRetry}
                      className="text-sm font-semibold text-accent-blue hover:text-blue-400 transition-colors btn-press"
                    >
                      Try Again →
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
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-all btn-press rounded-xl hover:bg-surface-800"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            <span className="hidden sm:inline">{prevLesson.lesson.title}</span>
            <span className="sm:hidden">Previous</span>
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            to={`/language/${langId}/${nextLesson.section.id}/${nextLesson.lesson.id}`}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-accent-blue hover:text-blue-400 transition-all btn-press rounded-xl hover:bg-accent-blue/5"
          >
            <span className="hidden sm:inline">{nextLesson.lesson.title}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to={`/language/${langId}`}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-accent-green hover:text-green-300 transition-all btn-press rounded-xl hover:bg-accent-green/5"
          >
            Back to Course
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        )}
      </nav>
    </div>
  )
}
