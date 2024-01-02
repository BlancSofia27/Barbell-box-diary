/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#ffb588",
        whitesmoke: "#f0f0f0",
        red: "#eb0000",
        gray: "#94a3b8",
        goldenrod: "#ffc120",
        limegreen: {
          100: "#1bc122",
          200: "#00a106",
        },
        white: "#fff",
        maroon: "#7e000b",
        marroncito: "#993833",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        quicksand: "Quicksand",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "2xl":"22px",
      "5xl": "24px",
      "20xl":"30px",
      "21xl": "40px",
      "16xl": "35px",
      inherit: "inherit",
    },
    screens: {
      'sm': { 'max': '480px', 'min': '0px' },
      'md': { 'max': '1200px', 'min': '481px' },
      'lg': { 'max': '1440px', 'min': '1201px' },
      'xl': { 'max': '1920px', 'min': '1441px' },
    } 
  },
  corePlugins: {
    preflight: false,
  },
}
