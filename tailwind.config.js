/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '960px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        purpler: 'hsl(287, 27%, 35%)',
      },

      backgroundImage: {
        'hero-pattern': "url('./img/shawarma8.png')",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

