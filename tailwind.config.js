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
          '0%': {transform: 'translate(-15rem, 2.5rem)'},
          '50%': {transform: 'translate(-15rem, 2.5rem)'},
          '100%': {transform: 'translate(-10rem, 7rem)'}
        },
        needs: {
          '0%': {transform: 'translate(15rem, 2.5rem)'},
          '50%': {transform: 'translate(15rem, 2.5rem)'},
          '100%': {transform: 'translate(10rem, 7rem)'}
        },
        customers: {
          '0%': {transform: 'translateY(28rem)'},
          '50%': {transform: 'translateY(28rem)'},
          '100%': {transform: 'translateY(24rem)'}
        },
        text: {
          from: {bottom: '-10rem'},
          to: {bottom: '0px'}
        },
        line: {
          from: {height: '0', opacity: '0%'},
          to: {height: '17rem', opacity: '100%'}
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
        line: 'line 2s 2s cubic-bezier(.47,.03,.11,.85) forwards'
      },
    },
  },
  plugins: [require("daisyui")],
}

