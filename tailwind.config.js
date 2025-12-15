/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B2C56', // Derived from "TECH ACCOUNT" text
          primary: '#1A5F95', // Mid-tone blue
          light: '#2DAADE', // Derived from the logo icon cyan
          accent: '#F59E0B', // Complementary Orange for CTAs
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
