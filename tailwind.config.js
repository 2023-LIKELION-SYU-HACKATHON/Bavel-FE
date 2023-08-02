/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'bavel-orange': '#FF7A00',
      'bavel-gray-light': '#F5F5F5',
      'bavel-gray-deep': '#606060',
      'bavel-apricot': '#FFDDBE',
    },
  },
  plugins: [require('daisyui')],
};
