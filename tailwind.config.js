/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEDBC8",
        alert: "#FF5A3C",
        alertdim: "#3A1F16",
        card1: "#101010",
        card2: "#1B1B1B",
        accent: "#10B981",
        accentLight: "#34D399",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
