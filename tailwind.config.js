/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "#194C6F",
        "very-dark-desaturated-cyan": "#305865",
        "very-dark-grayish-red": "#6B6767",
        "very-dark-gray": "#5f5f5f",
        "light-grayish-blue": "#F1F5F8",
        "light-grayish-red": "#F9F3F3",
        "dark-grayish-red": "#817D7D",
        "dark-moderate-cyan": "#4A91A7",
        "dark-cyan": "#226478",
        "dark-silver": "#707070",
        "mostly-desaturated-dark-cyan": "#53808C",
        "mostly-black": "#242424"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"]
      }
    },
  },
  plugins: [],
}