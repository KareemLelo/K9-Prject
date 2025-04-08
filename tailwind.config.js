/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7f8446',
          dark: '#6a6f3b',
          light: '#959b51'
        },
        secondary: {
          DEFAULT: '#B8976B',
          dark: '#9d7f59',
          light: '#c3a47d'
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        }
      }
    }
  },
  plugins: []
};