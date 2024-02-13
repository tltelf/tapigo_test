/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arboria-medium': ['Arboria-Medium', 'sans-serif'],
        'arboria-book': ['Arboria-Book', 'sans-serif'],
        'roboto-regular': ['Roboto-Regular', 'sans-serif'],
        'roboto-black': ['Roboto-Black', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        black: 900,
      },
      colors: {
        'custom-blue': '#0089ff',
      },
      screens: {
        xs: '361px',
        s: '461px',
      },
    },
  },
  plugins: [],
}
