/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        'accent': '#c8102e',
        'dark': '#1a1a1a',
        'highlight': '#3737B7',
        'light': '#fff',
        'light-secondary': '#f2f2f7',
        'light-tertiary': '#7676804d',
        'secondary': '#323236',
        'tertiary': '#0000007a',
      },
    },
  },
  plugins: [],
}
