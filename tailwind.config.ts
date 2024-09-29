import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";
import tailwindBootstrapGrid from "tailwind-bootstrap-grid";
import type { Config } from "tailwindcss";

const fontBase = 16;
const fontScale = 1.24571;

const h6 = fontBase / fontBase;
const h5 = h6 * fontScale;
const h4 = h5 * fontScale;
const h3 = h4 * fontScale;
const h2 = h3 * fontScale;
const h1 = h2 * fontScale;

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: [{ pattern: /^swiper-/ }],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        text: "#888888",
        light: "#ceced0",
        dark: "#222",
        primary: "#FE6019",
        secondary: "#FEE140",
        body: "#fafafa",
        border: "#EBEBEB",
        "theme-light": "#E5E5E5",
        "theme-dark": "#1a202c",
      },
      fontSize: {
        base: `${fontBase}px`,
        h1: `${h1}rem`,
        "h1-sm": `${h1 * 0.8}rem`,
        h2: `${h2}rem`,
        "h2-sm": `${h2 * 0.8}rem`,
        h3: `${h3}rem`,
        "h3-sm": `${h3 * 0.8}rem`,
        h4: `${h4}rem`,
        h5: `${h5}rem`,
        h6: `${h6}rem`,
      },
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "sans-serif"],
      },
    },
  },
  plugins: [
    tailwindTypography,
    tailwindForms,
    tailwindBootstrapGrid({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
  ],
} satisfies Config;
