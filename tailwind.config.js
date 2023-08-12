/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartanRegular: ["SPARTAN-REGULAR"],
        spartanMedium: ["SPARTAN-MEDIUM"],
        spartanSemiBold: ["SPARTAN-SEMIBOLD"],
        spartanBold: ["SPARTAN-BOLD"],
        spartanExtraBold: ["SPARTAN-EXTRABOLD"],
      },
      colors: {
        "pw-blue": "#28AFB0",
        "pw-dark-blue": "#000C24",
        "pw-light": "#FBFBFB",
        "pw-orange": "#F44336",
        "pw-orange-100": "#FFE3E1",
        "pw-orange-200": "#FFCCC8",
        "pw-orange-500": "#F44336",
        "pw-gray": "#928A97",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
