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
    xp: getStored('cq_xp', 0),
    streak: getStored('cq_streak', 0),
    streakFreeze: getStored('cq_streak_freeze', 2),
    lastActiveDate: getStored('cq_last_active', null),
    progress: getStored('cq_progress', {}), // { courseId: { lessonId: true } }
    level: getStored('cq_level', 1),
  }

  // Check streak on load
  if (stored.lastActiveDate) {
    if (!isToday(stored.lastActiveDate) && !isYesterday(stored.lastActiveDate)) {
      // Streak broken (unless freeze available)
      if (stored.streakFreeze > 0) {
        stored.streakFreeze -= 1
        save('cq_streak_freeze', stored.streakFreeze)
      } else {
        stored.streak = 0
        save('cq_streak', 0)
      }
    }
  }

  return {
    ...stored,

    addXp: (amount) => {
      const newXp = get().xp + amount
      const newLevel = Math.floor(newXp / 100) + 1
      set({ xp: newXp, level: newLevel })
      save('cq_xp', newXp)
      save('cq_level', newLevel)
    },

    completeLesson: (courseId, lessonId) => {
      const progress = { ...get().progress }
      if (!progress[courseId]) progress[courseId] = {}
      if (progress[courseId][lessonId]) return // already completed

      progress[courseId][lessonId] = true
      save('cq_progress', progress)

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
      save('cq_last_active', today)
      save('cq_streak', newStreak)

      // Add XP
      const newXp = get().xp + 25
      const newLevel = Math.floor(newXp / 100) + 1
      save('cq_xp', newXp)
      save('cq_level', newLevel)

      set({
        progress,
        streak: newStreak,
        lastActiveDate: today,
        xp: newXp,
        level: newLevel,
      })
    },

    resetProgress: () => {
      localStorage.removeItem('cq_xp')
      localStorage.removeItem('cq_streak')
      localStorage.removeItem('cq_streak_freeze')
      localStorage.removeItem('cq_last_active')
      localStorage.removeItem('cq_progress')
      localStorage.removeItem('cq_level')
      localStorage.removeItem('arena_solved')
      set({ xp: 0, streak: 0, streakFreeze: 2, lastActiveDate: null, progress: {}, level: 1 })
    }
  }
})
