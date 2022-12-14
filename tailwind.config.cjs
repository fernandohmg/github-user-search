/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: "0.688rem",
      xs: "0.813rem",
    },
    extend: {
      colors: {
        "light-0079FF": "#0079FF",
        "light-697C9A": "#697C9A",
        "light-4B6A9B": "#4B6A9B",
        "light-2B3442": "#2B3442",
        "light-D7DCEF": "#D7DCEF",
        "light-F6F8FF": "#F6F8FF",
        "light-FEFEFE": "#FEFEFE",
        "light-222731": "#222731",
        "dark-90A4D4": "#90A4D4",
        "dark-0079FF": "#0079FF",
        "dark-141D2F": "#141D2F",
        "dark-1E2A47": "#1E2A47",
        "60ABFF": "#60ABFF",
        A4B3CC: "#A4B3CC",
        F74646: "#F74646",
      },
      boxShadow: {
        default: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "icon-search": "url('/icon-search.svg')",
      },
      backgroundPosition: {
        "left-center": "10px 10px",
        "tablet-left-center": "24px 15px",
      },
      gridTemplateColumns: {
        footer: "20px auto",
        "tablet-footer": "repeat(2, 20px auto)",
        "desktop-main-grid": "115px auto",
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
      animation: {
        error: "error .5s 0.1s",
      },
      keyframes: {
        error: {
          "0%": { transform: "translateX(0px)" },
          "37%": { transform: "translateX(5px)" },
          "55%": { transform: "translateX(-5px)" },
          "73%": { transform: "translateX(4px)" },
          "82%": { transform: "translateX(-4px)" },
          "91%": { transform: "translateX(2px)" },
          "96%": { transform: "translateX(-2px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
