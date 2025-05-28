/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005b86',
        "gray-600": '7C7C7C',
        "blue-50": 'E2F5F9',
        "blue-900": '#294172',
        "red-dark": '#E10E0E',
        "blue-400": '#2979FF',
        "dark": '#111928',
        "green-300": '#43A047',


      }
    },
  },
  plugins: [],
}