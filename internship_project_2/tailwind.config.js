/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    screens: {
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
      
      fontFamily: {
        'Gideon-Roman': ['Gideon-Roman',]
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '0rem',
        },
       
      },
    },
  },
  plugins: [],
}

