import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentColor: "#5d5FEF",
        // accentColorLight: "#bebff9",
        blackBackground: "#1E1E1E",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(22deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "75%": {
            transform: "rotate(22deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        progress: {
          "0%": {
            width: "0%",
          },
          "10%": {
            width: "10%",
          },
          "20%": {
            width: "20%",
          },
          "30%": {
            width: "30%",
          },
          "40%": {
            width: "40%",
          },
          "50%": {
            width: "50%",
          },
          "60%": {
            width: "60%",
          },
          "70%": {
            width: "70%",
          },
          "80%": {
            width: "80%",
          },
          "90%": {
            width: "90%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        wave: "wave 1s linear infinite",
        progress: "progress .3s forwards",
        "progress-inverse": "progress reverse .3s forwards",
      },
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
export default config;
