module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'workSans': ["Work Sans"],
        'plexSerif': ["IBM Plex Serif"]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        89: "22.25rem",
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
