module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      basement: "BasementGrotesque-Black, cursive",
      space: "SpaceMono-Regular, cursive",
    },
    extend: {
      animation: {
        "spin-slow": "spin 10s infinite linear",
      },
    },
  },
  plugins: [],
};
