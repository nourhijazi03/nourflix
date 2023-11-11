/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-100":"#635e5f",
        "primary-200":"#746f71",
        "first-100":"#104b37",
        "first-200":"#2f6b67",
        "light-100":"#e8e5e9",
        "additional-100":"#b68942",
      },
    },
  },
  plugins: [],
}

