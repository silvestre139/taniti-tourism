/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdfcfb',
          100: '#f9f5f0',
          200: '#f0e6d8',
          300: '#e4d4be',
          400: '#d4bd9e',
          500: '#c4a57e',
        },
        ocean: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        palm: {
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
