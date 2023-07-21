/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mariner: {
          50: "#f0f8fe",
          100: "#ddeefc",
          200: "#c3e3fa",
          300: "#9ad2f6",
          400: "#6ab9f0",
          500: "#479cea",
          600: "#3280de",
          700: "#2867c5",
          800: "#2856a5",
          900: "#254a83",
          950: "#1b2e50",
        },
      },
    },
  },
  plugins: [],
};
