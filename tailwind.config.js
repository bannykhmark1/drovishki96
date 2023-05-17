/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        firewood: "url('../public/image/background-firewood.jpg')",
      },
      width: {
        100: "450px",
      },
      colors: {
        "orange-firewood": "#FBB752",
        "orange-button": "#F06336",
        "orange-border": "#F06336",
        "orange-text": "#F06336",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
