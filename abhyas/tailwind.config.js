/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          900: '#0f0f0f',
          800: '#1a1a1a',
          700: '#242424',
          600: '#2e2e2e',
          500: '#383838',
        },
        accent: {
          blue: '#4f8cff',
          green: '#34d399',
          orange: '#f59e0b',
          purple: '#a78bfa',
          pink: '#f472b6',
          red: '#ef4444',
          gold: '#ffd700',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a3a3a3',
          muted: '#737373',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'slide-up': 'slide-up 0.4s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'stagger-in': 'stagger-in 0.5s ease-out both',
        'flicker': 'flicker 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'shake': 'shake 0.4s ease-in-out',
        'bounce-in': 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'count-up': 'count-up 0.6s ease-out',
        'progress-fill': 'progress-fill 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ripple': 'ripple 0.6s ease-out',
        'gold-flash': 'gold-flash 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'particle': 'particle 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'stagger-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'flicker': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(79, 140, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(79, 140, 255, 0.6), 0 0 40px rgba(167, 139, 250, 0.3)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-3px)' },
          '40%': { transform: 'translateX(3px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'count-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '80%': { width: 'var(--progress-target, 100%)' },
          '90%': { width: 'calc(var(--progress-target, 100%) + 2%)' },
          '100%': { width: 'var(--progress-target, 100%)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'gold-flash': {
          '0%': { backgroundColor: 'transparent' },
          '20%': { backgroundColor: 'rgba(255, 215, 0, 0.15)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'particle': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(var(--px, 20px), var(--py, -30px)) scale(0)', opacity: '0' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #4f8cff, #a78bfa)',
        'gradient-cta-hover': 'linear-gradient(135deg, #6b9fff, #b89dfa)',
        'gradient-ember': 'linear-gradient(135deg, #f59e0b, #ef4444)',
        'gradient-success': 'linear-gradient(135deg, #34d399, #4f8cff)',
        'shimmer-bg': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        'skeleton-bg': 'linear-gradient(90deg, #242424 25%, #2e2e2e 50%, #242424 75%)',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
