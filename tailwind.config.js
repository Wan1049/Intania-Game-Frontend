module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        racingBlack: '#000',
        racingRed: '#ff0000',
        racingGold: '#FFD700',
        racingSilver: '#C0C0C0',
        racingBronze: '#CD7F32',
        racingGray: '#1c1c1c',
      },
      fontFamily: {
        racing: ["Formula1", "Orbitron", "Oswald", "Arial Black", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
