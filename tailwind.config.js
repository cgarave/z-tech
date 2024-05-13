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
        },
        branding: {
          '0%': {top: '2.5rem', left: '26rem'},
          '50%': {top: '2.5rem', left: '26rem'},
          '100%': {top: '7rem', left: '31rem'}
        },
        needs: {
          '0%': {top: '2.5rem', right: '26rem'},
          '50%': {top: '2.5rem', right: '26rem'},
          '100%': {top: '7rem', right: '31rem'}
        },
        customers: {
          '0%': {bottom: '5rem'},
          '50%': {bottom: '5rem'},
          '100%': {bottom: '7rem'}
        },
        text: {
          from: {bottom: '-10rem'},
          to: {bottom: '0px'}
        },
        line: {
          from: {height: '0'},
          to: {height: '13rem'}
        }
      },
      animation: {
        slideRight: 'slideRight 10s infinite linear',
        slideLeft: 'slideLeft 100s infinite linear',
        branding: 'branding 2s cubic-bezier(.47,.03,.11,.85) forwards',
        needs: 'needs 2s cubic-bezier(.47,.03,.11,.85) forwards',
        customers: 'customers 2s cubic-bezier(.47,.03,.11,.85) forwards',
        text1: 'text 0.3s cubic-bezier(.47,.03,.11,.85) forwards',
        text2: 'text 0.6s cubic-bezier(.47,.03,.11,.85) forwards',
        text3: 'text 1.2s cubic-bezier(.47,.03,.11,.85) forwards',
        line: 'line 2s cubic-bezier(.47,.03,.11,.85) forwards'
      },
    },
  },
  plugins: [require("daisyui")],
}

