/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#000000",
        light: "#F5F5F5",
        primary: "#D4AF37",
        primaryDark: "#FDE047",
        brown: "#B45309",
        gold: "#D4AF37",
        red: "#B23A3A",
        cream: "#FAFAFA",
        navy: "#000000",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(212,175,55,0.4) 2px,#F5F5F5 5px,#F5F5F5 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(253,224,71,0.5) 2px,#000000 8px,#000000 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(212,175,55,0.4) 2px,#F5F5F5 5px,#F5F5F5 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(253,224,71,0.5) 2px,#000000 8px,#000000 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(212,175,55,0.4) 2px,#F5F5F5 5px,#F5F5F5 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(253,224,71,0.5) 2px,#000000 8px,#000000 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(212,175,55,0.4) 2px,#F5F5F5 5px,#F5F5F5 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(253,224,71,0.5) 2px,#000000 8px,#000000 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
