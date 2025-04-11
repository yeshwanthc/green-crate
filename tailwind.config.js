/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
      display: ['"Open Sans"', 'serif'],
      body: ['Inter', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#f4f9f4',
        100: '#e5f3e5',
        200: '#c8e6c8',
        300: '#aad9aa',
        400: '#8dcc8d',
        500: '#70bf70',
        600: '#59a259',
        700: '#468448', 
        800: '#366636',
        900: '#274b27',
      },
      secondary: {
        50: '#f9ffe6',
        100: '#f2ffcc',
        200: '#e6ff99',
        300: '#d9ff66',
        400: '#ccff33',
        500: '#bfff00',
        600: '#a3d977', 
        700: '#88b35e',
        800: '#6e8c46',
        900: '#54662f',
      },
      accent: {
        50: '#fffbea', 
        100: '#fff3c7',
        200: '#ffeaa3',
        300: '#ffe281', 
        400: '#ffd95c',
        500: '#ffd133',
        600: '#ffc400',
        700: '#cc9d00',
        800: '#997600',
        900: '#664f00',
      },
      background: {
        100: '#F9FFF6', 
      },
      text: {
        DEFAULT: '#2f2f2f',
      }
    }
    },
  },
  plugins: [],
};