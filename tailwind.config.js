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
      backgroundImage: {
        'button-linear': 'linear-gradient(to bottom right, #06b6d4, #1d4ed8)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}