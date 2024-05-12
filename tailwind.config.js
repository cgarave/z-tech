/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/routes/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'}, 
        },
        slideLeft: {
          from: {transform: 'translateX(-50%)'},
          to: {transform: 'translateX(50%)'},
        }
      },
      animation: {
        slideRight: 'slideRight 10s infinite linear',
        slideLeft: 'slideLeft 100s infinite linear',
      },
    },
  },
  plugins: [require("daisyui")],
}

