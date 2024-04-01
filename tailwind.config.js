/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gradient: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))',
      },
    },
  },
  plugins: [],
};
