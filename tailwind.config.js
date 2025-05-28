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
        "gray-600": '#7C7C7C',
        "blue-50": '#E2F5F9',
        "red-dark": '#E10E0E',
        "blue-400": '#2979FF',
        "blue-500": '#007AFF',
        "blue-900": '#294172',
        "dark": '#111928',
        "red-dark": '#E10E0E',
        "green-300": '#43A047',
        "green-700": "#22AD5C",
        "gray-50": '#F1F1F1',
        "gray-200": '#D3D3D3',
        "gray-500": '#ECECEC',
        "gray-700": '#6F6F6F',
      },
      fontSize: {
        base16: '1rem',
      },
    },
  },
  plugins: [],
}