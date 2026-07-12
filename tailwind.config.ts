import type { Config } from "tailwindcss";

/**
 * VELIRA design system — strict monochrome.
 * No other colors may be introduced: no gold, no blue, no gradients.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111", // near-black — text, buttons
        "gray-light": "#F5F5F5", // section backgrounds
        "gray-medium": "#D9D9D9", // hairline borders, dividers
        "gray-dark": "#666666", // secondary text (5.7:1 on white)
      },
      fontFamily: {
        // Cormorant: quiet-luxury serif display (deliberately not Playfair)
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      // Corner radius is capped at 2px across the whole site.
      borderRadius: {
        none: "0",
        DEFAULT: "2px",
        sm: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
