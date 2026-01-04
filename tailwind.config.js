/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#1a73e8',
          'blue-hover': '#1765cc',
          gray: '#5f6368',
          'light-gray': '#f1f3f4',
          border: '#dadce0',
        },
      },
    },
  },
  plugins: [],
}
