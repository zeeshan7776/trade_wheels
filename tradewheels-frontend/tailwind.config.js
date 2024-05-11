/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  darkMode: "selector",
  theme: {
    colors: {
      opacity: {
        0: 0,
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      dark: {
        white: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        text: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        bkg: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      MercuryBlue: {
        50: "#bcc7cc",
      },
      SparklingSilver: {
        50: "#cad0cf",
      },
      SunsetRed: {
        50: "#e43414",
      },
      CherryBlack: {
        50: "#3c282a",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
