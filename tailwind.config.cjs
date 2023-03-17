/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        21: "repeat(21, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        21: "repeat(21, minmax(0, 1fr))",
      },
      fontFamily: {
        snake: ["Odibee Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero": "url('./src/images/background-snake-game.png')"
      }
      
    },
  },
  plugins: [],
};
