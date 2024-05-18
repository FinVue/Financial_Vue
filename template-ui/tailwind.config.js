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
      letterSpacing: {
        'f-small': '-0.02em',
        'f-widest': '0.03em',
      },
      colors: {
        'secondary': '#68FA61',
        'secondary-2': '#01B781',
        'accent': '#687A6A',
      },
      lineHeight: {
        'primary': '-0.3em'
      }
    },
  },
  plugins: [],
}