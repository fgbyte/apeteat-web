/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/dist/assets/companie_desktop_01 1.png')",
        'custom-bg-contact': "url('/dist/assets/hero_contact_desktop 1.png')",
        'custom-bg-form': "url('/dist/assets/home/img_contact_form 1.png')",
        'custom-bg-como-funciona': "url('/dist/assets/our_food_desktop_01 1.png')",
        'custom-bg-price': "url('/dist/assets/how_menus 1.png')",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
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