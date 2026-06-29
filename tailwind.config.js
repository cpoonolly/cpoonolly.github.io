/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        slate: {
          950: '#1a1d2e',
          900: '#21243d',
          800: '#2a2d45',
          700: '#363a56',
        },
        coral: {
          300: '#ff8a80',
          400: '#ff6b6b',
          500: '#e85d5d',
          600: '#c94a4a',
        },
      },
    },
  },
  plugins: [],
}
