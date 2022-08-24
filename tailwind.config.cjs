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
        "dark-0079FF": "#0079FF",
        "dark-141D2F": "#141D2F",
        "dark-1E2A47": "#1E2A47",
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
        "left-center": "10px 12px",
      },
      gridTemplateColumns: {
        footer: "20px auto",
      },
    },
  },
  plugins: [],
};
