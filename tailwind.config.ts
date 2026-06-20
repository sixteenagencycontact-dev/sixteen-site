import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#f7f7f1",
        archive: "#F3DE6D",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        editorial: ["Didot", "Bodoni 72", "Bodoni MT", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
