/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightCyan: "hsl(193, 38%, 86%)",
          neonGreen: "hsl(150, 100%, 66%)",
        },
        neutral: {
          grayishBlue: "hsl(217, 19%, 38%)",
          darkGrayishBlue: "hsl(217, 19%, 24%)",
          darkBlue: "hsl(218, 23%, 16%)",
        },
      },
      screens: {
        md: "768px",
      },
      shadow:{
        diceShadow: "0px 0px 15px 5px hsl(150, 100%, 66%)"
      }
    },
  },
  plugins: [],
};