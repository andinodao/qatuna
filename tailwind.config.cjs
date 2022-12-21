/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      
    },
    extend: {
      backgroundColor: {
        primary: '',
      },
      colors: {
        disabled: 'rgba(255, 255, 255, 0.5)',
        brandPrimary: '',
        primary: '',
        secondary: '',
      },
    },
  },
  plugins: [],
};
