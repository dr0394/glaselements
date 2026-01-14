/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'anthrazit': '#1A1A1A',
        'glaswerk-white': '#F5F5F5',
        'stahlblau': '#3E5A80',
        'silbergrau': '#C0C0C0',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
