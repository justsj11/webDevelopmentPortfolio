module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
