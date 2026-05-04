/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F1EC',
        ink: '#0F0F12',
        accent: '#0F766E',
        'accent-bright': '#14B8A6',
        dark: '#0F0F12',
        peach: '#D5E8E5',
        success: '#14B8A6',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

