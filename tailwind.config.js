/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FF7599',
          DEFAULT: '#FF4D85',
          dark: '#E04377',
        },
        secondary: {
          light: '#9C40E6',
          DEFAULT: '#8A2BE2',
          dark: '#7524C1',
        },
        accent: {
          light: '#FF6FB3',
          DEFAULT: '#FF4081',
          dark: '#E03672',
        },
        complementary: {
          light: '#40E6D4',
          DEFAULT: '#2BE2B8',
          dark: '#24C1A3',
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#E5E7EB',
          dark: '#D1D5DB',
        },
        background: '#1F2937',
        surface: '#111827',
      },
    },
  },
  plugins: [],
}