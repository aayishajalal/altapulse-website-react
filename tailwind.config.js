/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0366",
        primaryDark: "#0A4D9A", // Darker shade of primary for hover
        secondary: "#3048AC",
        tertiary: "#00E5FF",
        title: "#011632",
        bodytext: "#3C4959",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans font
      },
    },
  },
  plugins: [],
};
