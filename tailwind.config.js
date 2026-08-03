/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F3F',
        'navy-light': '#132D56',
        gold: '#C8962E',
        'gold-hover': '#B0841F',
        'gold-light': '#F5E6C8',
        surface: '#FFFFFF',
        muted: '#7B7B8B',
        'muted-on-navy': '#8B95A8',
      },
    },
  },
  plugins: [],
};
