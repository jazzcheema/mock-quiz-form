import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      gray: "#666666",
      black: "#000000",
      beige: "#f5f5dc",
      "off-white": "#f8f8f8",
      "custom-blue": "#9ACDF7",
      "custom-blue-light": "#ADD8FA",
      'pale-blue': '#89CFF0',
        'light-gray': '#E0E0E0',
        'dark-gray': '#303030',
        'subtle-yellow-green': '#B4D69E',
        'stem-green': '#3CB371',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animationDuration: {
        '3000': '3000ms',
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
