import { useState, useCallback } from 'react'
import { useStore } from '../utils/store'
import languages from '../data/languages'
import Editor from '@monaco-editor/react'
import { Play, RotateCcw, CheckCircle2, ChevronLeft, Swords, Trophy, Loader2 } from 'lucide-react'
import { executeCode } from '../utils/codeRunner'
import { getMonacoLanguage } from '../utils/courseData'

// Arena challenges per language
const arenaChallenges = {
  python: [
    {
      id: 'fizzbuzz',
      title: 'FizzBuzz',
      difficulty: 'Easy',
      description: 'Print numbers from 1 to 15. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".',
      starterCode: '# Print FizzBuzz for 1 to 15\n',
      expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
      hints: ['Use a for loop with range(1, 16)', 'Check divisibility by 15 first, then 3, then 5', 'Use the modulo operator %'],
    },
    {
      id: 'sum_even',
      title: 'Sum of Evens',
      difficulty: 'Easy',
      description: 'Calculate and print the sum of all even numbers from 1 to 20.',
      starterCode: '# Sum all even numbers from 1 to 20\n',
      expectedOutput: '110',
      hints: ['Use range(2, 21, 2) to get even numbers', 'Or use a loop and check if num % 2 == 0', 'Use sum() with a generator for a one-liner'],
    },
    {
      id: 'reverse_string',
      title: 'Reverse a String',
      difficulty: 'Easy',
      description: 'Reverse the string "hello world" and print the result.',
      starterCode: 'text = "hello world"\n# Reverse and print\n',
      expectedOutput: 'dlrow olleh',
      hints: ['Use string slicing: text[::-1]', 'Or use reversed() and join()', 'Remember to print the result'],
    },
    {
      id: 'factorial',
      title: 'Factorial',
      difficulty: 'Medium',
      description: 'Calculate and print the factorial of 7 (7! = 7 × 6 × 5 × 4 × 3 × 2 × 1).',
      starterCode: '# Calculate factorial of 7\n',
      expectedOutput: '5040',
      hints: ['Use a loop multiplying from 1 to 7', 'Or use recursion', 'Or use math.factorial()'],
    },
  ],
  javascript: [
    {
      id: 'fizzbuzz',
      title: 'FizzBuzz',
      difficulty: 'Easy',
      description: 'Print numbers from 1 to 15. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".',
      starterCode: '// Print FizzBuzz for 1 to 15\n',
      expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
      hints: ['Use a for loop from 1 to 15', 'Check divisibility by 15 first', 'Use console.log() to print'],
    },
    {
      id: 'array_sum',
      title: 'Array Sum',
      difficulty: 'Easy',
      description: 'Calculate the sum of [10, 20, 30, 40, 50] and print it.',
      starterCode: 'const nums = [10, 20, 30, 40, 50];\n// Calculate and print the sum\n',
      expectedOutput: '150',
      hints: ['Use reduce()', 'Or use a for...of loop', 'console.log the final sum'],
    },
    {
      id: 'palindrome',
      title: 'Palindrome Check',
      difficulty: 'Medium',
      description: 'Check if "racecar" is a palindrome and print "true" or "false".',
      starterCode: 'const word = "racecar";\n// Check if palindrome\n',
      expectedOutput: 'true',
      hints: ['Reverse the string and compare', 'Use split, reverse, join', 'Print the boolean result'],
    },
  ],
}

export default function Arena() {
  const [selectedLang, setSelectedLang] = useState(null)
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const { completeArenaChallenge, getArenaSolved, arenaProgress } = useStore()

  const challenges = selectedLang ? (arenaChallenges[selectedLang] || []) : []
  const solved = selectedLang ? getArenaSolved(selectedLang) : 0

  const handleSelectChallenge = (challenge) => {
    setSelectedChallenge(challenge)
    setCode(challenge.starterCode)
    setOutput('')
    setError('')
    setIsCorrect(false)
    setShowHints(false)
  }

  const handleRun = useCallback(() => {
    if (!selectedChallenge) return
    setError('')
    setIsCorrect(false)

    const result = executeCode(code, selectedLang)
    if (result.error) {
      setError(result.error)
      setOutput('')
      return
    }

    setOutput(result.output)
    if (result.output.trim() === selectedChallenge.expectedOutput.trim()) {
      setIsCorrect(true)
      completeArenaChallenge(selectedLang, selectedChallenge.id)
    }
  }, [code, selectedLang, selectedChallenge, completeArenaChallenge])

  const handleReset = () => {
    if (selectedChallenge) {
      setCode(selectedChallenge.starterCode)
      setOutput('')
      setError('')
      setIsCorrect(false)
    }
  }

  // Keyboard shortcut: Ctrl+Enter to run
  const handleKeyDown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleRun()
    }
  }, [handleRun])

  // Language selection screen
  if (!selectedLang) {
    return (
      <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Swords size={28} className="text-accent-orange" aria-hidden="true" />
            <h1 className="text-3xl font-bold text-text-primary">Arena</h1>
          </div>
          <p className="text-text-secondary">Pick a language and solve coding challenges to sharpen your skills.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" role="list" aria-label="Available languages">
          {languages.map(lang => {
            const hasChallenges = !!arenaChallenges[lang.id]
            const langSolved = getArenaSolved(lang.id)
            const total = arenaChallenges[lang.id]?.length || 0

            return (
              <button
                key={lang.id}
                role="listitem"
                onClick={() => hasChallenges && setSelectedLang(lang.id)}
                disabled={!hasChallenges}
                className={`p-4 rounded-xl border text-left transition-all ${
                  hasChallenges
                    ? 'bg-surface-800 border-surface-700 hover:border-surface-600 hover:translate-y-[-2px] cursor-pointer'
                    : 'bg-surface-800/50 border-surface-700/50 opacity-50 cursor-not-allowed'
                }`}
              >
                <span className="text-2xl" aria-hidden="true">{lang.icon}</span>
                <h3 className="font-medium text-text-primary mt-2">{lang.title}</h3>
                {hasChallenges ? (
                  <p className="text-xs text-text-muted mt-1">{total} challenges {langSolved > 0 && `• ${langSolved} solved`}</p>
                ) : (
                  <p className="text-xs text-text-muted mt-1">Coming soon</p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Challenge list (no challenge selected yet)
  if (!selectedChallenge) {
    const langMeta = languages.find(l => l.id === selectedLang)
    return (
      <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <button
          onClick={() => setSelectedLang(null)}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-6"
          aria-label="Back to all languages"
        >
          <ChevronLeft size={16} aria-hidden="true" /> All Languages
        </button>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl" aria-hidden="true">{langMeta?.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">{langMeta?.title} Arena</h1>
            <p className="text-sm text-text-secondary">{solved}/{challenges.length} challenges solved</p>
          </div>
        </div>

        <div className="space-y-3" role="list" aria-label="Challenges">
          {challenges.map(challenge => {
            const isSolved = arenaProgress[selectedLang]?.[challenge.id]
            return (
              <button
                key={challenge.id}
                role="listitem"
                onClick={() => handleSelectChallenge(challenge)}
                className="w-full text-left p-4 bg-surface-800 rounded-xl border border-surface-700 hover:border-surface-600 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isSolved ? (
                      <CheckCircle2 size={20} className="text-accent-green" aria-label="Solved" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-surface-500" aria-label="Unsolved" />
                    )}
                    <div>
                      <h3 className="font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">{challenge.description.slice(0, 80)}...</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    challenge.difficulty === 'Easy' ? 'bg-accent-green/10 text-accent-green' :
                    challenge.difficulty === 'Medium' ? 'bg-accent-orange/10 text-accent-orange' :
                    'bg-accent-red/10 text-accent-red'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Active challenge
  return (
    <div className="page-transition max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <button
        onClick={() => { setSelectedChallenge(null); setOutput(''); setError('') }}
        className="flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-4"
        aria-label="Back to challenge list"
      >
        <ChevronLeft size={16} aria-hidden="true" /> Back to challenges
      </button>

      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-xl font-bold text-text-primary">{selectedChallenge.title}</h1>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          selectedChallenge.difficulty === 'Easy' ? 'bg-accent-green/10 text-accent-green' :
          selectedChallenge.difficulty === 'Medium' ? 'bg-accent-orange/10 text-accent-orange' :
          'bg-accent-red/10 text-accent-red'
        }`}>
          {selectedChallenge.difficulty}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" onKeyDown={handleKeyDown}>
        {/* Left: Problem */}
        <div className="space-y-4">
          <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
            <p className="text-sm text-text-secondary leading-relaxed">{selectedChallenge.description}</p>
          </div>

          <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
            <h4 className="text-sm font-medium text-text-muted mb-2">Expected Output</h4>
            <pre className="text-sm font-mono text-accent-green bg-surface-900 p-3 rounded-lg whitespace-pre-wrap">
              {selectedChallenge.expectedOutput}
            </pre>
          </div>

          {selectedChallenge.hints && (
            <div className="p-4 bg-surface-800 rounded-xl border border-surface-700">
              <button
                onClick={() => setShowHints(!showHints)}
                className="text-sm font-medium text-accent-orange hover:text-orange-300 transition-colors"
                aria-expanded={showHints}
              >
                {showHints ? 'Hide Hints' : 'Show Hints'}
              </button>
              {showHints && (
                <ul className="mt-3 space-y-1.5" aria-label="Hints">
                  {selectedChallenge.hints.map((hint, i) => (
                    <li key={i} className="text-sm text-text-secondary">• {hint}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Right: Editor */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-surface-700">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-800 border-b border-surface-700">
              <span className="text-xs text-text-muted font-mono">{selectedLang}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-text-muted hidden sm:inline">Ctrl+Enter to run</span>
                <button onClick={handleReset} className="p-1.5 text-text-muted hover:text-text-secondary" aria-label="Reset code">
                  <RotateCcw size={14} />
                </button>
                <button
                  onClick={handleRun}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-green text-surface-900 text-xs font-semibold rounded-md hover:bg-green-300 transition-colors"
                  aria-label="Run code"
                >
                  <Play size={12} aria-hidden="true" /> Run
                </button>
              </div>
            </div>
            <Editor
              height="300px"
              language={getMonacoLanguage(selectedLang)}
              value={code}
              onChange={(val) => setCode(val || '')}
              theme="vs-dark"
              loading={
                <div className="flex items-center justify-center h-[300px] bg-surface-900">
                  <Loader2 size={24} className="animate-spin text-text-muted" />
                  <span className="ml-2 text-sm text-text-muted">Loading editor...</span>
                </div>
              }
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'JetBrains Mono', monospace",
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                padding: { top: 12, bottom: 12 },
                wordWrap: 'on',
                tabSize: 4,
                insertSpaces: true,
                automaticLayout: true,
              }}
            />
          </div>

          <div className="rounded-xl border border-surface-700 overflow-hidden" role="status" aria-live="polite">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-800 border-b border-surface-700">
              <span className="text-xs text-text-muted">Output</span>
              {isCorrect && (
                <span className="flex items-center gap-1 text-xs text-accent-green font-medium">
                  <CheckCircle2 size={12} aria-hidden="true" /> Solved!
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

          {isCorrect && (
            <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-xl flex items-center gap-3" role="alert">
              <Trophy size={22} className="text-accent-green" aria-hidden="true" />
              <div>
                <p className="font-semibold text-accent-green">Challenge Solved!</p>
                <p className="text-sm text-text-secondary">+50 XP earned</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
