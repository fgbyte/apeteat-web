/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        azulOscuro: '#3C475B',
        grisFondo: '#D9D9D9',
        verde: '#03D0B6',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.8125rem',
        'h2': '2.5rem',
        'h3': '2.1875rem',
        'base': '1rem',
        'destaque': '1.5625rem',
      }
    },
  },
  plugins: [],
}