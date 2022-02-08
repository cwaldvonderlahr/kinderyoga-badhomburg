module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    /* "./nuxt.config.{js,ts}", */
  ],
  theme: {
    extend: {
      colors: {
        yoga: { /* https://www.instagram.com/p/B7i5l82Fen_/ */
          red: "#E75A5F",
          redtext: "#FAFADC",
          lightyellow: "#FAFADC",
          lightyellowtext: "#E75A5F",
          yellowtext: "#D67407",
          orange: "#FDB15D",
          orangetext: "#81580A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
