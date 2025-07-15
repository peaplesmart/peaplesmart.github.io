
module.exports = {
  darkMode: 'class',
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#0ea5e9',
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a'
          
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}