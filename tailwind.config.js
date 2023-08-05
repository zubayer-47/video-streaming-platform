/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "initial": "60px 1fr",
        "md": "200px repeat(2, 1fr)",
        "lg": "250px repeat(3, 1fr)",
        "xl": "250px repeat(8, 1fr)",
      }
    },
  },
  plugins: [],
}