module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myColor: {
          50: '#e9e4ff',
          100: '#bdb3ff',
          200: '#9280fd',
          300: '#674efc',
          400: '#3e1dfb',
          500: '#2705e2',
          600: '#1d03b0',
          700: '#14017e',
          800: '#0b004d',
          900: '#04001d',
        },
        bms: {
          50: "#edf1fc",
          100: "#d3d4e1",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#2b3147",
          900: "#0a0a16",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}