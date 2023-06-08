/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackVariant: "#141414",
        primaryColor: "#005AE2", 
      },
      backgroundImage: {
        heroTopBg: "url('../public/hero/topBg.svg')",
        heroBg: "url('../public/hero/heroBg.svg')",
      },
    },
  },
  plugins: [],
};
