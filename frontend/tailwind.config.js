/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        law: {
          black:   '#000000',
          dark:    '#0d0d0d',
          surface: '#141414',
          card:    '#1a1a1a',
          border:  '#2a2a2a',
          muted:   '#555555',
          secondary: '#888888',
          text:    '#cccccc',
          white:   '#ffffff',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
