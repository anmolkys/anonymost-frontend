/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg_dark : {
          DEFAULT: '#030303',
          brighter: '#272728',
          less_brighter:'#1a1a1a',
        },
        reddit_border: {
          DEFAULT: '#343536'
        } 
      },
    },
  },
  plugins: [],
}
