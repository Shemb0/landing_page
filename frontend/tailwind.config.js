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
          black:        '#0A0908',
          dark:         '#111110',
          surface:      '#1A1917',
          card:         '#201F1D',
          border:       '#2E2C29',
          muted:        '#5C5956',
          secondary:    '#8C897F',
          text:         '#C8C0B4',
          white:        '#F2EDE4',
          gold:         '#C5A35A',
          'gold-light': '#DDB96E',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
