const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      light: {
        primary: '#F6F8FC',
        secondary: '#EDF3FD',
      },
      dark: {
        primary: '#131314',
        secondary: '#26272A',
      },
      contrast: {
        light: '#FAFAF9',
        dark: '#0F0F0F',
      },
      accent: {
        primary: '#1818B4',
        secondary: '#131390',
      },
      neutral: {
        200: '#1F1F1F',
        400: '#3D3D3D',
        500: '#7A7A7A',
        600: '#D8DCDE',
        800: '#EEF0F1',
      },
      feedback: {
        error: '#EBADAD',
        info: '#ADD2EB',
        warning: '#E2CC8D',
        success: '#9DE6A6',
        status: '#D8DCDE',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
