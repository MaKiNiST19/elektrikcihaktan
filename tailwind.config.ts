import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d2736",
          50: "#f4f5f7",
          100: "#e3e6eb",
          200: "#c1c7d1",
          300: "#95a0b0",
          400: "#66748a",
          500: "#475770",
          600: "#374458",
          700: "#2b3546",
          800: "#1d2736",
          900: "#141b26",
        },
        accent: {
          DEFAULT: "#ff6600",
          50: "#fff4ec",
          100: "#ffe3cf",
          200: "#ffbf8e",
          300: "#ff9a4d",
          400: "#ff7f1f",
          500: "#ff6600",
          600: "#e05600",
          700: "#b84500",
          800: "#8f3600",
          900: "#662700",
        },
        ink: "#3f3f3f",
        muted: "#bababa",
        surface: "#f5f5f5",
        line: "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-dosis)", "var(--font-montserrat)", "sans-serif"],
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", md: "2rem" },
        screens: { "2xl": "1280px" },
      },
    },
  },
  plugins: [],
};

export default config;
