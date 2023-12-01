import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/node_modules/react-tooltip/*.tsx",
    "./resources/js/**/*.tsx",
    "./resources/js/**/*.ts",
    "./resources/js/**/*.js",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        title: ["Signika", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [forms],
};
