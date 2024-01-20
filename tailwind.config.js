/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: "#191E1E",
        tbc_white: "#F4F4F4",
        tbc_blue: "#00a3e0",
        tbc_brown: "#222222",
        light_brown: "#767676",
      },
    },
  },
  plugins: [],
}