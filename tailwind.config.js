/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: "#191E1E",
        tbc_text: "#F4F4F4",
      },
    },
  },
  plugins: [],
}