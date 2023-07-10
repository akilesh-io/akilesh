const colors = require( 'tailwindcss/colors' );

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.700'),
          p: {
            color: theme('colors.gray.700'),
            '&:hover': {
              color: theme('colors.gray.600'),
            },
          },
        },
      },
      
      dark: {
        css: {
          color: theme('colors.gray.300'),
          p: {
            color: theme('colors.gray.100'),
            '&:hover': {
              color: theme('colors.gray.200'),
            },
          },
        },
      },

    }),
    extend: {
      fontFamily: {
        openSans: [ 'var(--font-open-sans)' ],
        ptSerif: [ 'var(--font-pt-serif)' ],
        fancy: ['Sriracha']
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
};
