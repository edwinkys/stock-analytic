module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      primary: "#5547eb",  // Primary
      secondary: "#8767e4",  // Hover or focus
      dark: "#17171c",  // Primary background
      light: "#e6e6e6",  // Primary text
      gray: {
        "lighter": "#73738c",  // Caption or border
        "darker": "#22222a"  // Secondary background
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
