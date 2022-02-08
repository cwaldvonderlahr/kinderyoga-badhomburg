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
      fontFamily: {
        chalkduster: ['Chalkduster', 'sans-serif'],
      },
      colors: {
        yoga: { /* https://www.instagram.com/p/B7i5l82Fen_/ */
          brand: "#ee8220",
          red: "#E75A5F",
          redtext: "#FAFADC",
          lightyellow: "#FAFADC",
          yellow: "#FEE698",
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
