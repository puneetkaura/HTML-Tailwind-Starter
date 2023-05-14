module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
  ],
}