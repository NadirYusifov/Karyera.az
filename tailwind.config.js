/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-8": "#0090FF",
        "ashy-gray": "#8A8A8A",
        "dark-charcoal": "#323232"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily :{
        jakarta: ["Plus Jakarta Sans"]
      },
      backgroundImage: {
        "contact-image": "url('/public/contact.svg')"
      }
    },
  },
  plugins: [],
}