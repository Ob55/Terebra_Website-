/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens extracted from the Terebra mockups
        brand: {
          // vivid lime-green accent — CTAs, badges, checkmarks, progress
          DEFAULT: '#7ed957',
          500: '#6dcb45',
          600: '#57b733',
          700: '#3f9a22',
          // darkest step — small text on white/muted (WCAG AA)
          800: '#2f7d2f',
          // deep green used in the logo wordmark
          ink: '#1f6b2e',
        },
        forest: {
          // dark feature bands / footer
          DEFAULT: '#0e1f14',
          900: '#0a1710',
          800: '#12271a',
          700: '#1b3524',
        },
        ink: '#111714', // near-black body headings
        body: '#5b6660', // muted body text
        line: '#e7e9e4', // subtle borders
        surface: '#ffffff',
        muted: '#f4f6f1', // light gray-green section fill
        badge: {
          bg: '#e4f5de',
          fg: '#2f7d2f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '2000px',
        wide: '2200px',
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 23, 20, 0.04)',
        lift: '0 10px 30px -12px rgba(17, 23, 20, 0.22)',
        pop: '0 12px 40px rgba(17, 23, 20, 0.10)',
      },
      transitionTimingFunction: {
        soft: 'var(--ease-out)',
      },
      transitionDuration: {
        micro: '160ms',
        ui: '240ms',
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
    },
  },
  plugins: [],
}
