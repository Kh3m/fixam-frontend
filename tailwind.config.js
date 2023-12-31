/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        'fblack': "#1F1F1F",
        'fyellow': '#FF9900',
        'fpurple': '#DF22FE',
        'fgrey': '#9B9B9B',
        'fdarkery-grey': '#616161',
        'fdark': {
          50: '#f9f9f9',
          100: '#ededed',
          200: '#d3d3d3',
          300: '#b3b3b3',
          400: '#a0a0a0',
          500: '#898989',
          600: '#6c6c6c',
          700: '#202020',
          800: '#121212',
          900: '#111'
        },
        'pri': {
          '50': '#fffeea',
          '100': '#fffac5',
          '200': '#fff685',
          '300': '#ffeb46',
          '400': '#ffdb1b',
          'default': '#fcb900',
          '600': '#e29000',
          '700': '#bb6602',
          '800': '#984e08',
          '900': '#7c400b',
          '950': '#482100',
      },
      'fyellow-shades': {
        '50': '#fffbea',
        '100': '#fff2c5',
        '200': '#ffe685',
        '300': '#ffd246',
        '400': '#ffbd1b',
        '500': '#ff9900',
        '600': '#e27200',
        '700': '#bb4d02',
        '800': '#983b08',
        '900': '#7c310b',
        '950': '#481700',
    },
    
      'fblue': '#4054B2',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
}

