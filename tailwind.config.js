module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
 }
