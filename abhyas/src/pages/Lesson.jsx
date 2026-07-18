import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Editor from '@monaco-editor/react'
import { Play, RotateCcw, Lightbulb, ChevronRight, CheckCircle2, HelpCircle, BookOpen, Code2, X } from 'lucide-react'
import { getCourse, getLesson, getNextLesson } from '../data/courses'
import { useStore } from '../utils/store'

const TABS = ['theory', 'code', 'quiz']

export default function Lesson() {
  const { courseId, lessonId } = useParams()
  const course = getCourse(courseId)
  const lesson = getLesson(courseId, lessonId)
  const { completeLesson } = useStore()

  const [activeTab, setActiveTab] = useState('theory')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [lessonComplete, setLessonComplete] = useState(false)

  useEffect(() => {
    if (lesson) {
      setCode(lesson.starterCode || '')
    }
    setOutput('')
    setShowHint(false)
    setQuizAnswer(null)
    setQuizSubmitted(false)
    setLessonComplete(false)
    setActiveTab('theory')
  }, [lessonId])

  if (!course || !lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
        <Link to="/courses" className="text-neon-cyan hover:underline">← Back to courses</Link>
      </div>
    )
  }

  // Code execution
  const runCode = () => {
    setIsRunning(true)
    setOutput('')

    try {
      if (courseId === 'javascript' || courseId === 'typescript') {
        const logs = []
        const mockConsole = {
          log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
          error: (...args) => logs.push('Error: ' + args.join(' '))
        }
        const fn = new Function('console', code)
        fn(mockConsole)
        setOutput(logs.join('\n') || '(no output)')
      } else {
        // Simulate output for non-JS languages
        setOutput(simulateOutput(code))
      }
    } catch (err) {
      setOutput(`Error: ${err.message}`)
    }

    setIsRunning(false)
  }

  const simulateOutput = (code) => {
    const lines = code.split('\n')
    const outputs = []
    for (const line of lines) {
      // Python print
      let match = line.match(/print\((.+)\)/)
      if (match) {
        let val = match[1].trim()
        // Remove quotes
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          outputs.push(val.slice(1, -1))
        } else {
          outputs.push(val)
        }
        continue
      }
      // C++ cout
      match = line.match(/cout\s*<<\s*["'](.+?)["']/)
      if (match) { outputs.push(match[1]); continue }
      // Java println
      match = line.match(/System\.out\.println\(["'](.+?)["']\)/)
      if (match) { outputs.push(match[1]); continue }
      // R cat/print
      match = line.match(/(?:cat|print)\(["'](.+?)["']\)/)
      if (match) { outputs.push(match[1]); continue }
    }
    return outputs.length > 0 ? outputs.join('\n') : '✓ Code accepted! (Full output requires a runtime environment)'
  }

  const submitCode = () => {
    runCode()
    // Check against expected output
    setTimeout(() => {
      const currentOutput = output || simulateOutput(code)
      if (lesson.expectedOutput && currentOutput.includes(lesson.expectedOutput)) {
        setOutput(prev => (prev || currentOutput) + '\n\n✅ Correct! +25 XP')
        handleComplete()
      } else if (!lesson.expectedOutput) {
        // No strict check — just accept
        setOutput(prev => (prev || currentOutput) + '\n\n✅ Looks good! +25 XP')
        handleComplete()
      } else {
        setOutput(prev => (prev || currentOutput) + `\n\n❌ Expected output to contain: "${lesson.expectedOutput}"\nTry again!`)
      }
    }, 100)
  }

  const handleComplete = () => {
    if (!lessonComplete) {
      completeLesson(courseId, lessonId)
      setLessonComplete(true)
    }
  }

  const handleQuizSubmit = () => {
    setQuizSubmitted(true)
    if (quizAnswer === lesson.quiz.correctAnswer) {
      handleComplete()
    }
  }

  const nextLesson = getNextLesson(courseId, lessonId)

  const editorLanguageMap = {
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
    'ai-prompts': 'plaintext'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link to={`/course/${courseId}`} className="text-gray-500 hover:text-neon-cyan text-sm">
            ← {course.title}
          </Link>
          <span className="text-gray-700">/</span>
          <h1 className="text-lg font-semibold">{lesson.title}</h1>
        </div>
        {lessonComplete && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20"
          >
            <CheckCircle2 size={14} className="text-neon-green" />
            <span className="text-xs text-neon-green font-medium">Completed</span>
          </motion.div>
        )}
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-1 mb-6 p-1 glass-card rounded-xl border border-white/5 w-fit">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === tab
                ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab === 'theory' && <BookOpen size={14} />}
            {tab === 'code' && <Code2 size={14} />}
            {tab === 'quiz' && <HelpCircle size={14} />}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* THEORY TAB */}
        {activeTab === 'theory' && (
          <motion.div
            key="theory"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="max-w-3xl"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              <div 
                className="prose prose-invert prose-sm max-w-none
                  [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-4 [&_h2]:text-white
                  [&_p]:text-gray-300 [&_p]:mb-3 [&_p]:leading-relaxed
                  [&_pre]:bg-dark-800 [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:my-4 [&_pre]:overflow-x-auto
                  [&_code]:font-mono [&_code]:text-neon-cyan [&_code]:text-sm
                  [&_pre_code]:text-gray-300
                  [&_ul]:space-y-1 [&_ul]:my-3 [&_li]:text-gray-300
                  [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: lesson.theory }}
              />
              <button
                onClick={() => setActiveTab('code')}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl text-white font-medium hover:scale-105 transition-transform"
              >
                <Code2 size={16} />
                Start Coding
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* CODE TAB */}
        {activeTab === 'code' && (
          <motion.div
            key="code"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* Challenge + Editor */}
            <div className="space-y-4">
              {/* Challenge Description */}
              <div className="glass-card rounded-xl p-5 border border-neon-cyan/10">
                <h3 className="text-sm font-semibold text-neon-cyan mb-2 flex items-center gap-2">
                  <Code2 size={14} />
                  Challenge
                </h3>
                <p className="text-gray-300 text-sm">{lesson.challenge}</p>
              </div>

              {/* Editor */}
              <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
                <div className="flex items-center justify-between p-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <button
                    onClick={() => setCode(lesson.starterCode || '')}
                    className="p-1.5 rounded hover:bg-white/5 text-gray-500 hover:text-white transition-colors"
                    title="Reset code"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
                <Editor
                  height="280px"
                  language={editorLanguageMap[course.language] || 'plaintext'}
                  value={code}
                  onChange={(val) => setCode(val || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: 'JetBrains Mono, Fira Code, monospace',
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 16 },
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-green/80 to-neon-green rounded-xl text-dark-900 font-semibold hover:scale-105 transition-transform disabled:opacity-50"
                >
                  <Play size={16} />
                  {isRunning ? 'Running...' : 'Run'}
                </button>
                <button
                  onClick={submitCode}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl text-white font-medium hover:scale-105 transition-transform"
                >
                  <CheckCircle2 size={16} />
                  Submit
                </button>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/5 transition-colors"
                >
                  <Lightbulb size={14} />
                  Hint
                </button>
              </div>

              {/* Hint */}
              <AnimatePresence>
                {showHint && lesson.hint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="glass-card rounded-xl p-4 border border-yellow-500/20 bg-yellow-500/5"
                  >
                    <div className="flex items-start gap-2">
                      <Lightbulb size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-yellow-300 font-mono">{lesson.hint}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Output Panel */}
            <div className="glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">Output</span>
                {output && (
                  <button onClick={() => setOutput('')} className="text-gray-600 hover:text-white">
                    <X size={14} />
                  </button>
                )}
              </div>
              <div className="flex-1 p-4 font-mono text-sm min-h-[280px]">
                {output ? (
                  <pre className="whitespace-pre-wrap text-gray-300">{output}</pre>
                ) : (
                  <p className="text-gray-600 italic">Click "Run" to see output here...</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && lesson.quiz && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="max-w-2xl"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle size={20} className="text-neon-purple" />
                Quick Quiz
              </h2>

              <p className="font-medium mb-4 text-lg">{lesson.quiz.question}</p>
              <div className="space-y-2">
                {lesson.quiz.options.map((opt, idx) => {
                  const isSelected = quizAnswer === idx
                  const isCorrect = quizSubmitted && idx === lesson.quiz.correctAnswer
                  const isWrong = quizSubmitted && isSelected && idx !== lesson.quiz.correctAnswer

                  return (
                    <button
                      key={idx}
                      onClick={() => !quizSubmitted && setQuizAnswer(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm ${
                        isCorrect
                          ? 'border-neon-green/50 bg-neon-green/10 text-neon-green'
                          : isWrong
                          ? 'border-red-500/50 bg-red-500/10 text-red-400'
                          : isSelected
                          ? 'border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan'
                          : 'border-white/5 hover:border-white/20 text-gray-300 hover:bg-white/5'
                      }`}
                      disabled={quizSubmitted}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={handleQuizSubmit}
                  disabled={quizAnswer === null}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl text-white font-medium hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  Check Answer
                </button>
              ) : (
                <div className="mt-6">
                  {quizAnswer === lesson.quiz.correctAnswer ? (
                    <p className="text-neon-green font-medium">🎉 Correct!</p>
                  ) : (
                    <p className="text-red-400 font-medium">❌ Incorrect. The answer is: {lesson.quiz.options[lesson.quiz.correctAnswer]}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Lesson */}
      {lessonComplete && nextLesson && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 glass-card rounded-2xl p-6 border border-neon-green/20 flex items-center justify-between"
        >
          <div>
            <p className="text-neon-green font-semibold mb-1">🎉 Lesson Complete!</p>
            <p className="text-sm text-gray-400">Ready for the next one?</p>
          </div>
          <Link
            to={`/course/${courseId}/lesson/${nextLesson.id}`}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl text-white font-medium hover:scale-105 transition-transform"
          >
            Next: {nextLesson.title}
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      )}
    </div>
  )
}
