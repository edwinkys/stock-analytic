module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,  // or 'media' or 'class'
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      primary: "#5547eb",  // Primary color
      secondary: "#8767e4",  // Hover color
      dark: "#17171c",  // Primary background
      light: "#e6e6e6",  // Primary text color
      gray: {
        "lighter": "#73738c",  // Secondary text, placeholder, and border color
        "darker": "#22222a",  // Secondary background
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
