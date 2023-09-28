/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        1: '1px',
        2: '2px',
        'rounded-5': '5px',
        5: '5px',
        10: '10px'
      },
      spacing: {
        60: '60px',
        50: '50px',
        41: '41px',
        42: '42px',
        120: '120px',
        22: '22px',
        32: '32px'
      },
      colors: {
        black: '#191919',
        'black-2': '#000000',
        'black-3': '#555555',
        red: '#EA5455',
        'dark-red': '#BE1E2D',
        yellow: '#FFC600',
        green: '#28C76F',
        gray: '#9D9D9D',
        'gray-2': '#999999',
        'gray-1': '#D9D9D9',
        'gray-3': '#F3F3F3',
        'gray-light': '#F9F9F9',
        'gray-4': '#666666',
        white: '#FFFFFF',
        'light-green': '#1DCE00',
        blue: '#2196F3',
        'blue-dark': '#4F3268',
        'black-rgba': 'rgba(25, 25, 25, 0.3)'
      },
      screens: {
        // => @media (min-width: 640px) { ... }
        xxs: '375px',
        xs: '450px',
        sm: '640px',
        md: '768px',
        sml: '950px',
        lg: '1024px',
        xlg: '1130px',
        xl: '1280px',
        xxl: '1339px',
        xxxl: '1536px'
      },
      boxShadow: {
        '3xl': '2px 2px 10px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  fontFamily: {
    // exo: ['Public Sans', 'sans-serif']
  },
  plugins: ['@tailwindcss/line-clamp']
}
