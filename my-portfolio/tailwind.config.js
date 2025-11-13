/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        primary: '#52C3C4',
        secondary: '#FFFAF0',
        accent: '#C55453',
        neutral: '#FFFAF0',
        background: '#3A342F',
        backgroundImage: {
          'fade-black': 'linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)'
        },
      },

      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },

      borderRadius: {
        'md': '0.5rem',
      },

      fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['1.2rem', { lineHeight: '1.25rem' }],
      base: ['1.72813rem', { lineHeight: '1.5rem' }],
      lg: ['2.07375rem', { lineHeight: '1.75rem' }],
      xl: ['8.5rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    },
  },
  plugins: [],
};


