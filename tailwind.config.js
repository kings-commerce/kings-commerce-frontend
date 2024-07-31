/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B0E4B2",
          200: "#4dc351",
          300: "#39bc3e",
          400: "#127816",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif", "DM Sans"],
      },
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
