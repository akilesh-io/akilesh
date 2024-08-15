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
      scale: {
        '67.5': '0.675', // 100% - 32.5% = 67.5%
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#0e1012",
        mild: "#27272a",
        white: "#e8e5f0",
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
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
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
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
