import { create } from 'zustand'

// Helper to get data from localStorage
const getStored = (key, fallback) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : fallback
  } catch {
    return fallback
  }
}

// Helper to save to localStorage
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

// Check if user practiced today
const isToday = (dateStr) => {
  if (!dateStr) return false
  return new Date(dateStr).toDateString() === new Date().toDateString()
}

const isYesterday = (dateStr) => {
  if (!dateStr) return false
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return new Date(dateStr).toDateString() === yesterday.toDateString()
}

export const useStore = create((set, get) => {
  // Initialize from localStorage
  const stored = {
    xp: getStored('abhyas_xp', 0),
    streak: getStored('abhyas_streak', 0),
    streakFreeze: getStored('abhyas_streak_freeze', 2),
    lastActiveDate: getStored('abhyas_last_active', null),
    // New nested progress model: { languageId: { sectionId: { lessonId: true } } }
    progress: getStored('abhyas_progress', {}),
    level: getStored('abhyas_level', 1),
    // Arena progress: { languageId: { challengeId: true } }
    arenaProgress: getStored('abhyas_arena', {}),
  }

  // Check streak on load
  if (stored.lastActiveDate) {
    if (!isToday(stored.lastActiveDate) && !isYesterday(stored.lastActiveDate)) {
      if (stored.streakFreeze > 0) {
        stored.streakFreeze -= 1
        save('abhyas_streak_freeze', stored.streakFreeze)
      } else {
        stored.streak = 0
        save('abhyas_streak', 0)
      }
    }
  }

  return {
    ...stored,

    addXp: (amount) => {
      const newXp = get().xp + amount
      const newLevel = Math.floor(newXp / 100) + 1
      set({ xp: newXp, level: newLevel })
      save('abhyas_xp', newXp)
      save('abhyas_level', newLevel)
    },

    // Complete a lesson: languageId, sectionId, lessonId
    completeLesson: (languageId, sectionId, lessonId) => {
      const progress = JSON.parse(JSON.stringify(get().progress))
      if (!progress[languageId]) progress[languageId] = {}
      if (!progress[languageId][sectionId]) progress[languageId][sectionId] = {}
      if (progress[languageId][sectionId][lessonId]) return // already completed

      progress[languageId][sectionId][lessonId] = true
      save('abhyas_progress', progress)

      // Update streak
      const lastActive = get().lastActiveDate
      let newStreak = get().streak

      if (!isToday(lastActive)) {
        if (isYesterday(lastActive) || !lastActive) {
          newStreak += 1
        } else {
          newStreak = 1
        }
      }

      const today = new Date().toISOString()
      save('abhyas_last_active', today)
      save('abhyas_streak', newStreak)

      // Add XP
      const newXp = get().xp + 25
      const newLevel = Math.floor(newXp / 100) + 1
      save('abhyas_xp', newXp)
      save('abhyas_level', newLevel)

      set({
        progress,
        streak: newStreak,
        lastActiveDate: today,
        xp: newXp,
        level: newLevel,
      })
    },

    // Check if a lesson is completed
    isLessonCompleted: (languageId, sectionId, lessonId) => {
      const progress = get().progress
      return !!(progress[languageId]?.[sectionId]?.[lessonId])
    },

    // Get total completed lessons for a language
    getLanguageProgress: (languageId) => {
      const progress = get().progress[languageId]
      if (!progress) return 0
      let count = 0
      Object.values(progress).forEach(section => {
        count += Object.keys(section).length
      })
      return count
    },

    // Get total completed across all languages
    getTotalCompleted: () => {
      const progress = get().progress
      let count = 0
      Object.values(progress).forEach(lang => {
        Object.values(lang).forEach(section => {
          count += Object.keys(section).length
        })
      })
      return count
    },

    // Arena
    completeArenaChallenge: (languageId, challengeId) => {
      const arenaProgress = JSON.parse(JSON.stringify(get().arenaProgress))
      if (!arenaProgress[languageId]) arenaProgress[languageId] = {}
      if (arenaProgress[languageId][challengeId]) return

      arenaProgress[languageId][challengeId] = true
      save('abhyas_arena', arenaProgress)

      const newXp = get().xp + 50
      const newLevel = Math.floor(newXp / 100) + 1
      save('abhyas_xp', newXp)
      save('abhyas_level', newLevel)

      set({ arenaProgress, xp: newXp, level: newLevel })
    },

    getArenaSolved: (languageId) => {
      const arena = get().arenaProgress[languageId]
      return arena ? Object.keys(arena).length : 0
    },

    resetProgress: () => {
      localStorage.removeItem('abhyas_xp')
      localStorage.removeItem('abhyas_streak')
      localStorage.removeItem('abhyas_streak_freeze')
      localStorage.removeItem('abhyas_last_active')
      localStorage.removeItem('abhyas_progress')
      localStorage.removeItem('abhyas_level')
      localStorage.removeItem('abhyas_arena')
      set({
        xp: 0,
        streak: 0,
        streakFreeze: 2,
        lastActiveDate: null,
        progress: {},
        level: 1,
        arenaProgress: {},
      })
    }
  }
})
