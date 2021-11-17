module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      spacing: {
        100: "25rem",
      },
      borderWidth: {
        3: "3px",
        14: "14px",
      },
      width: {
        mc: "max-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
