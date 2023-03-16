/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'glossier-pink': '#f6e3e7',
      },
      fontFamily: {
        apercu: ['Apercu Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
