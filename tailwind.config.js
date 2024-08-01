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
    extend: {
      fontWeight: {
        hairline: "100",
        extrabold: "800",
        "extra-thick": "1000",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
