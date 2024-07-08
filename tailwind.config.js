/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F3F4F6",
          dark: "#D9D9D9",
          fair: "#E8EAEE"
        },
        secondary: {
          extraLight: "#D4F1C4",
          light: "#69CE31",
          dark: "#3F7C1D",
        },
        tertiary: "#353535",
      },
    },
  },
  plugins: [],
};
