import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code2, Zap, Target, Trophy, ChevronRight, Play } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Write Real Code',
    description: 'In-browser editor. No downloads, no setup. Write and run code from lesson one.',
    color: 'neon-cyan',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Run your code and see results immediately. Hints guide you when stuck.',
    color: 'neon-purple',
  },
  {
    icon: Target,
    title: 'Learn by Doing',
    description: 'Every lesson has coding challenges. Theory + practice in every step.',
    color: 'neon-green',
  },
  {
    icon: Trophy,
    title: 'Gamified Progress',
    description: 'Earn XP, maintain streaks, unlock badges, and level up your skills.',
    color: 'neon-pink',
  },
]

const languages = [
  { id: 'python', name: 'Python', color: '#3776AB', desc: 'Best first language. Readable and powerful.' },
  { id: 'javascript', name: 'JavaScript', color: '#F7DF1E', desc: 'The language of the web.' },
  { id: 'html', name: 'HTML', color: '#E34F26', desc: 'Build web pages from scratch.' },
  { id: 'css', name: 'CSS', color: '#1572B6', desc: 'Style and design websites.' },
  { id: 'typescript', name: 'TypeScript', color: '#3178C6', desc: 'JavaScript with types.' },
  { id: 'cpp', name: 'C++', color: '#00599C', desc: 'High-performance systems.' },
  { id: 'java', name: 'Java', color: '#ED8B00', desc: 'Enterprise and Android.' },
  { id: 'sql', name: 'SQL', color: '#336791', desc: 'Query any database.' },
  { id: 'r', name: 'R', color: '#276DC3', desc: 'Data science and statistics.' },
  { id: 'git', name: 'Git', color: '#F05032', desc: 'Version control mastery.' },
  { id: 'docker', name: 'Docker', color: '#2496ED', desc: 'Containerize anything.' },
  { id: 'ai-prompts', name: 'AI Prompts', color: '#10B981', desc: 'Prompt engineering for LLMs.' },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm text-neon-cyan font-medium">Free • Interactive • No Setup</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Learn to Code,</span>
              <br />
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                the Future Way
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Write real code in your browser. 12+ languages, interactive challenges,
              and gamified progress. No install, no credit card, no excuses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/courses"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl text-white font-semibold text-lg shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 hover:scale-105"
              >
                <Play size={20} />
                Start Learning Free
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/arena"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-medium hover:bg-white/5 hover:border-neon-purple/30 transition-all duration-300"
              >
                <Zap size={18} />
                Try the Arena
              </Link>
            </div>
          </motion.div>

          {/* Floating Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 max-w-lg mx-auto"
          >
            <div className="glass-card rounded-2xl p-6 border border-neon-cyan/20 shadow-neon-cyan animate-float">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-500 font-mono">hello.py</span>
              </div>
              <pre className="text-left font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-neon-purple">def</span>{' '}
                  <span className="text-neon-cyan">greet</span>
                  <span className="text-white">(name):</span>
                  {'\n'}
                  <span className="text-gray-500">    # Your first function!</span>
                  {'\n'}
                  <span className="text-white">    </span>
                  <span className="text-neon-purple">return</span>{' '}
                  <span className="text-neon-green">f"Hello, </span>
                  <span className="text-neon-cyan">{'{name}'}</span>
                  <span className="text-neon-green">! 🚀"</span>
                  {'\n\n'}
                  <span className="text-white">print(greet(</span>
                  <span className="text-neon-green">"World"</span>
                  <span className="text-white">))</span>
                </code>
              </pre>
              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="text-xs text-gray-500">▶ Output:</span>
                <span className="text-sm text-neon-green ml-2 font-mono">Hello, World! 🚀</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Everything you need to{' '}
            <span className="text-neon-cyan">learn to code</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 group hover:shadow-neon-cyan/10 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={24} className={`text-${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pick a language,{' '}
              <span className="text-neon-purple">start now</span>
            </h2>
            <p className="text-gray-400 text-lg">12 languages. Zero setup. Just click and code.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/course/${lang.id}`}
                  className="glass-card rounded-xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 block group hover:scale-105 hover:shadow-lg"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-lg font-bold"
                    style={{ backgroundColor: `${lang.color}20`, color: lang.color }}
                  >
                    {lang.name[0]}
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-neon-cyan transition-colors">
                    {lang.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{lang.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 border border-neon-purple/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
              <p className="text-gray-400 mb-8">
                Pick any language above, or jump straight into Python — the best first language for beginners.
              </p>
              <Link
                to="/course/python"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl text-white font-semibold shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 hover:scale-105"
              >
                <Play size={18} />
                Start with Python
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
