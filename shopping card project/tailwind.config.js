/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "../internship_project_2/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'francis': ['Josefin Sans'],
        'primary': ['Josefin Sans'],
        'Roboto': ["Roboto"],
      },

      colors: {
        'primary': '#FFF2B7',
      },
    }
  },
  plugins: [],
}