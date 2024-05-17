/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'heading-1': ['64px'],
        'heading-2': ['40px'],
        'heading-3': ['24px'],
        'subtitle': ['24px'],
        'body': ['16px'],
        'small': ['14px'],
        'pre-title': ['10px'],
        'btn-text': ['10px'],
        'link': ['16px'],
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serfif'],
      },
    },
  },
  plugins: [],
}