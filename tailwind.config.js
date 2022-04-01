module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2a7ae3",
        text_primary: "#2d3748",
        text_secondary: "#718096"
      }
    },
  },
  plugins: [],
}
