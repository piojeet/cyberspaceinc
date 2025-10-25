/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-color':'#6366f1',
        'dark-color': '#0f0e1a'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}