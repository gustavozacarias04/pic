/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,css}"
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    screens: {
      'sm': { 'max': '640px' },
      'md': { 'max': '768px' },
      'lg': { 'max': '1024px' },
      'xl': { 'max': '1280px' },
    },
  },
  plugins: [],
};
