/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#FFDE21",
        secondary: "#000000",

        "primary-light": "#FFF09A",
        "primary-dark": "#FFCC00",

        white: "#FFFFFF",
        "off-white": "#FAFAFA",

        dark: "#2D2D2D",

        success: "#34C759",
        "success-dark": "#138808",

        danger: "#980404",
      },

      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
      },

      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
      },

      boxShadow: {
        card: "0 6px 18px rgba(0,0,0,0.08)",
        button: "0 8px 20px rgba(0,0,0,0.12)",
        navbar: "0 -4px 20px rgba(0,0,0,0.08)",
      },

      screens: {
        xs: "360px",
        mobile: "430px",
        tablet: "768px",
        ipad: "1024px",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};