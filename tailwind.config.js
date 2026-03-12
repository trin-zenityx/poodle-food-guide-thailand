/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'sans-serif'],
      },
      colors: {
        poodle: {
          50: '#fdf8f6',
          100: '#f9ebe6',
          200: '#f3d5cb',
          300: '#eab4a3',
          400: '#dd8870',
          500: '#ce6248',
          600: '#b84a32',
          700: '#993828',
          800: '#7f3126',
          900: '#6a2c24',
        }
      }
    },
  },
  plugins: [],
}
