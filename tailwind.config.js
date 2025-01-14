/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        torquoise: "#0DA3AD",
        torquoiseLight:"#EDFEFC",
        torquoiseDark:"#0A3942"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

