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
        'brand': {
          'red': {
            DEFAULT: "#441313",
            100: "#8B0101"
          },
          'yellow': "#FFD600",
          'sky': "#0FF",
          'white': "#FEFEFE",
          'black': {
            100: "#020202",
            200: "#1B1B1B"
          }
        }
      },
      fontFamily: {
        'ABeeZee': ["ABeeZee", "sans-serif"],
        'outfit': ["Outfit", "sans-serif"]
      },
      backgroundImage: {
        'line': "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 47.79%, rgba(255, 255, 255, 0.00) 100%)"
      }
    },
  },
  plugins: [],
};
