const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.tsx",
    "./lib/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme("colors.gray.700"),
          p: {
            color: theme("colors.gray.700"),
            "&:hover": {
              color: theme("colors.gray.600"),
            },
          },
        },
      },

      dark: {
        css: {
          color: theme("colors.gray.300"),
          p: {
            color: theme("colors.gray.100"),
            "&:hover": {
              color: theme("colors.gray.200"),
            },
          },
        },
      },
    }),
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        ptSerif: ["var(--font-pt-serif)"],
        bigilla: ["var(--font-bigilla)"],
        fancy: ["Sriracha"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
