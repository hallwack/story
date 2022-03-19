module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'space-mono': ['Space Mono']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s infinite linear'
      }
    },
  },
  plugins: [],
}
