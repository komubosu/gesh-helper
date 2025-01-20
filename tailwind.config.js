import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: { 'balsamiq-sans': ['var(--font-balsamiq-sans)'] },
    },
  },
  darkMode: 'class',
  plugins: [heroui({ addCommonColors: true })],
};
