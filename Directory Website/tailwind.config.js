module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Bitter',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        89: '22.25rem',
        100: '25rem',
        130: '32.5rem',
      },
      width: {
        mc: 'max-content',
      },
      borderRadius: {
        '5xl': '2.5rem',
        '10xl': '5rem',
        '20xl': '10rem',
      },
    },
  },
  variants: {
    extend: { scale: ['group-hover'] },
  },
  plugins: [],
};
