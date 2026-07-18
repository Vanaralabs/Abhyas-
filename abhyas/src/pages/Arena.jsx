import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swords, Trophy, Flame, Zap, Star, Timer, ChevronRight, RotateCcw, CheckCircle2 } from 'lucide-react'
import { useStore } from '../utils/store'

// Gamified coding challenges — increasing difficulty
const arenaChanllenges = [
  {
    id: 'a1',
    title: 'Sum Two Numbers',
    difficulty: 'Easy',
    xp: 15,
    language: 'javascript',
    description: 'Write a function that returns the sum of two numbers.',
    starterCode: 'function sum(a, b) {\n  // Your code here\n}',
    solution: 'function sum(a, b) {\n  return a + b;\n}',
    testCases: [
      { input: 'sum(2, 3)', expected: '5' },
      { input: 'sum(-1, 1)', expected: '0' },
      { input: 'sum(100, 200)', expected: '300' },
    ]
  },
  {
    id: 'a2',
    title: 'Reverse a String',
    difficulty: 'Easy',
    xp: 20,
    language: 'javascript',
    description: 'Write a function that reverses a string.',
    starterCode: 'function reverse(str) {\n  // Your code here\n}',
    solution: 'function reverse(str) {\n  return str.split("").reverse().join("");\n}',
    testCases: [
      { input: 'reverse("hello")', expected: '"olleh"' },
      { input: 'reverse("abc")', expected: '"cba"' },
    ]
  },
  {
    id: 'a3',
    title: 'Find the Maximum',
    difficulty: 'Easy',
    xp: 20,
    language: 'javascript',
    description: 'Write a function that returns the largest number in an array.',
    starterCode: 'function findMax(arr) {\n  // Your code here\n}',
    solution: 'function findMax(arr) {\n  return Math.max(...arr);\n}',
    testCases: [
      { input: 'findMax([1, 5, 3, 9, 2])', expected: '9' },
      { input: 'findMax([-1, -5, -2])', expected: '-1' },
    ]
  },
  {
    id: 'a4',
    title: 'FizzBuzz',
    difficulty: 'Medium',
    xp: 30,
    language: 'javascript',
    description: 'Return "Fizz" if divisible by 3, "Buzz" if by 5, "FizzBuzz" if both, otherwise the number as string.',
    starterCode: 'function fizzBuzz(n) {\n  // Your code here\n}',
    solution: 'function fizzBuzz(n) {\n  if (n % 15 === 0) return "FizzBuzz";\n  if (n % 3 === 0) return "Fizz";\n  if (n % 5 === 0) return "Buzz";\n  return String(n);\n}',
    testCases: [
      { input: 'fizzBuzz(15)', expected: '"FizzBuzz"' },
      { input: 'fizzBuzz(9)', expected: '"Fizz"' },
      { input: 'fizzBuzz(10)', expected: '"Buzz"' },
      { input: 'fizzBuzz(7)', expected: '"7"' },
    ]
  },
  {
    id: 'a5',
    title: 'Palindrome Check',
    difficulty: 'Medium',
    xp: 30,
    language: 'javascript',
    description: 'Return true if the string is a palindrome (reads same forwards and backwards), ignoring case.',
    starterCode: 'function isPalindrome(str) {\n  // Your code here\n}',
    solution: 'function isPalindrome(str) {\n  const s = str.toLowerCase();\n  return s === s.split("").reverse().join("");\n}',
    testCases: [
      { input: 'isPalindrome("racecar")', expected: 'true' },
      { input: 'isPalindrome("Hello")', expected: 'false' },
      { input: 'isPalindrome("Level")', expected: 'true' },
    ]
  },
  {
    id: 'a6',
    title: 'Count Vowels',
    difficulty: 'Medium',
    xp: 25,
    language: 'javascript',
    description: 'Return the number of vowels (a, e, i, o, u) in a string.',
    starterCode: 'function countVowels(str) {\n  // Your code here\n}',
    solution: 'function countVowels(str) {\n  return (str.match(/[aeiou]/gi) || []).length;\n}',
    testCases: [
      { input: 'countVowels("hello")', expected: '2' },
      { input: 'countVowels("programming")', expected: '3' },
      { input: 'countVowels("xyz")', expected: '0' },
    ]
  },
  {
    id: 'a7',
    title: 'Flatten Array',
    difficulty: 'Hard',
    xp: 50,
    language: 'javascript',
    description: 'Write a function that flattens a nested array one level deep.',
    starterCode: 'function flatten(arr) {\n  // Your code here\n}',
    solution: 'function flatten(arr) {\n  return arr.reduce((acc, val) => acc.concat(val), []);\n}',
    testCases: [
      { input: 'JSON.stringify(flatten([[1,2],[3,4],[5]]))', expected: '"[1,2,3,4,5]"' },
      { input: 'JSON.stringify(flatten([[1],[2],[3]]))', expected: '"[1,2,3]"' },
    ]
  },
  {
    id: 'a8',
    title: 'Fibonacci',
    difficulty: 'Hard',
    xp: 50,
    language: 'javascript',
    description: 'Return the nth Fibonacci number (0-indexed: fib(0)=0, fib(1)=1, fib(2)=1...).',
    starterCode: 'function fib(n) {\n  // Your code here\n}',
    solution: 'function fib(n) {\n  if (n <= 1) return n;\n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) {\n    [a, b] = [b, a + b];\n  }\n  return b;\n}',
    testCases: [
      { input: 'fib(0)', expected: '0' },
      { input: 'fib(1)', expected: '1' },
      { input: 'fib(10)', expected: '55' },
    ]
  },
]

const difficultyColors = {
  Easy: 'text-neon-green border-neon-green/20 bg-neon-green/10',
  Medium: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10',
  Hard: 'text-red-400 border-red-400/20 bg-red-400/10',
}

export default function Arena() {
  const { addXp } = useStore()
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [solved, setSolved] = useState(() => {
    const stored = localStorage.getItem('arena_solved')
    return stored ? JSON.parse(stored) : []
  })
  const [timer, setTimer] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)

  useEffect(() => {
    let interval
    if (timerRunning) {
      interval = setInterval(() => setTimer(t => t + 1), 1000)
    }
    return () => clearInterval(interval)
  }, [timerRunning])

  const startChallenge = (challenge) => {
    setSelectedChallenge(challenge)
    setCode(challenge.starterCode)
    setOutput('')
    setTimer(0)
    setTimerRunning(true)
  }

  const runTests = () => {
    if (!selectedChallenge) return
    const results = []
    let allPass = true

    for (const tc of selectedChallenge.testCases) {
      try {
        const fn = new Function(`${code}\nreturn ${tc.input}`)
        const result = String(fn())
        const pass = result === tc.expected || JSON.stringify(result) === tc.expected
        results.push(`${pass ? '✅' : '❌'} ${tc.input} → ${result} (expected ${tc.expected})`)
        if (!pass) allPass = false
      } catch (err) {
        results.push(`❌ ${tc.input} → Error: ${err.message}`)
        allPass = false
      }
    }

    setOutput(results.join('\n'))

    if (allPass) {
      setTimerRunning(false)
      if (!solved.includes(selectedChallenge.id)) {
        const newSolved = [...solved, selectedChallenge.id]
        setSolved(newSolved)
        localStorage.setItem('arena_solved', JSON.stringify(newSolved))
        addXp(selectedChallenge.xp)
        setOutput(prev => prev + `\n\n🎉 Challenge Solved! +${selectedChallenge.xp} XP (${timer}s)`)
      } else {
        setOutput(prev => prev + '\n\n✅ Already solved — no XP awarded.')
      }
    }
  }

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {!selectedChallenge ? (
        <>
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
                <Swords size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Code Arena</h1>
                <p className="text-gray-400">Gamified coding challenges. Solve them, earn XP, level up.</p>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center gap-6 mt-6">
              <div className="glass-card rounded-xl px-4 py-3 border border-white/5 flex items-center gap-2">
                <Trophy size={16} className="text-yellow-400" />
                <span className="text-sm font-medium">{solved.length}/{arenaChanllenges.length} Solved</span>
              </div>
              <div className="glass-card rounded-xl px-4 py-3 border border-white/5 flex items-center gap-2">
                <Zap size={16} className="text-neon-cyan" />
                <span className="text-sm font-medium">{arenaChanllenges.reduce((sum, c) => solved.includes(c.id) ? sum + c.xp : sum, 0)} XP Earned</span>
              </div>
            </div>
          </motion.div>

          {/* Challenge Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {arenaChanllenges.map((challenge, i) => {
              const isSolved = solved.includes(challenge.id)
              return (
                <motion.button
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => startChallenge(challenge)}
                  className={`text-left glass-card rounded-xl p-5 border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                    isSolved ? 'border-neon-green/20' : 'border-white/5 hover:border-neon-cyan/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full border ${difficultyColors[challenge.difficulty]}`}>
                      {challenge.difficulty}
                    </span>
                    {isSolved && <CheckCircle2 size={16} className="text-neon-green" />}
                  </div>
                  <h3 className="font-semibold mb-1">{challenge.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{challenge.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neon-cyan">+{challenge.xp} XP</span>
                    <ChevronRight size={14} className="text-gray-600" />
                  </div>
                </motion.button>
              )
            })}
          </div>
        </>
      ) : (
        /* Active Challenge */
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Challenge Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <button
                onClick={() => { setSelectedChallenge(null); setTimerRunning(false) }}
                className="text-sm text-gray-500 hover:text-neon-cyan mb-2 inline-block"
              >
                ← Back to Arena
              </button>
              <h2 className="text-2xl font-bold">{selectedChallenge.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{selectedChallenge.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="glass-card rounded-lg px-3 py-2 border border-white/5 flex items-center gap-2">
                <Timer size={14} className="text-neon-cyan" />
                <span className="font-mono text-sm">{formatTime(timer)}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full border ${difficultyColors[selectedChallenge.difficulty]}`}>
                {selectedChallenge.difficulty}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Editor */}
            <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
              <div className="p-3 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500">solution.js</span>
                <button
                  onClick={() => setCode(selectedChallenge.starterCode)}
                  className="text-gray-500 hover:text-white p-1"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-transparent p-4 font-mono text-sm text-gray-300 resize-none focus:outline-none"
                spellCheck={false}
              />
              <div className="p-3 border-t border-white/5 flex gap-3">
                <button
                  onClick={runTests}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-green/80 to-neon-green rounded-xl text-dark-900 font-semibold hover:scale-105 transition-transform"
                >
                  <Zap size={14} />
                  Run Tests
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
              <div className="p-3 border-b border-white/5">
                <span className="text-xs text-gray-500">Test Results</span>
              </div>
              <div className="p-4 font-mono text-sm min-h-[300px]">
                {output ? (
                  <pre className="whitespace-pre-wrap text-gray-300">{output}</pre>
                ) : (
                  <p className="text-gray-600 italic">Click "Run Tests" to check your solution...</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
