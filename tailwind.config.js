/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a03adb",
        secondary: "#7423ae",
        dark: "#404040"
      },
      fontFamily: {
        TacOne: "Tac One",
        Roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
