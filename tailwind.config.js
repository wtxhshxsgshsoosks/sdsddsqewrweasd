/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'tech-dark': '#0a0a0a',
        'tech-gray': '#1a1a1a',
      },
    },
  },
  plugins: [],
};