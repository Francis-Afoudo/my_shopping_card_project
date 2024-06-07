/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    screens : {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'green': '#658C4A',
        'white': '#fff',

      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '0rem',
          lg: '4rem',
          xl: '5rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '1000px',
          xl: '1050px',
          // '2xl': '1496px',
        },
      },
    },
  },
  plugins: [],
}

