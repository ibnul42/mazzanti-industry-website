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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        128: "32rem",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        "mazzanti": {
          black: "#000000",
          gray: "#1A1A1A",
          green: '#6F9A1A'
        },
      },
    },
  },
  plugins: [],
};
