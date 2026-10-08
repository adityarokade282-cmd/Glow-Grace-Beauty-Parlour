/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fef7f5',
          100: '#fdede9',
          200: '#fbd9d0',
          300: '#f7bbaa',
          400: '#f09278',
          500: '#e66d4e',
          600: '#d4502f',
          700: '#b03c25',
          800: '#8a3220',
          900: '#6b2a1c',
        },
        rosegold: {
          50: '#fdf6f3',
          100: '#faeae3',
          200: '#f4d5c8',
          300: '#ecbda0',
          400: '#e29d72',
          500: '#d98350',
          600: '#c46a3f',
          700: '#a35334',
          800: '#7e3e2a',
          900: '#5a2c1d',
        },
        blush: {
          50: '#fef9f8',
          100: '#fef0ee',
          200: '#fce0dc',
          300: '#f9c8c1',
          400: '#f3a298',
          500: '#e87b6e',
        },
        charcoal: {
          800: '#2a2220',
          900: '#1c1614',
          950: '#120e0c',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
