module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#363853",
          dark: "#373F41",
        },
        secondary: {
          DEFAULT: "#737B7D",
          light: "#F8F8F8",
        },
        third: {
          DEFAULT: "#FFD49F",
          dark: "#9C7340",
          light: "#FBFBFB",
        },
      },
      backgroundImage: (theme) => ({
        hero: "url('/bg-hero.png')",
      }),
      fontFamily: {
        Lato: ["Lato"],
        Poppins: ["Poppins"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
