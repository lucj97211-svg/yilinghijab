/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F4EF',
        'cream-2': '#EBE2D5',
        'cream-3': '#F2ECE2',
        espresso: '#2B2522',
        'espresso-light': '#4A403A',
        muted: '#8C7B70',
        border: '#DDD5C8',
        gold: '#C8962E',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'EB Garamond', 'Georgia', 'serif'],
        sans: ['Jost', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
