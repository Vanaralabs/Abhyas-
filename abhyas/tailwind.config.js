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
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(12px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
