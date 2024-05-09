/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { boxShadow: {
      'cardShadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
    }, fontFamily: {
      'lama': ['Lama Sans', 'sans-serif']
    }},
  },
  plugins: [require('tailwindcss-rtl'),],
}

