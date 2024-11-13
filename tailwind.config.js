/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'bree-serif': ['"Bree Serif"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif']
      },
      colors: {
        'accent': '#d99510',
        'dark': '#1a1a1a',
        'highlight': '#3737B7',
        'light': '#fff',
        'light-secondary': '#f2f2f7',
        'light-tertiary': '#ffffffdf',
        'secondary': '#323236',
        'tertiary': '#0000007a',
      },
    },
  },
  plugins: [],
}
