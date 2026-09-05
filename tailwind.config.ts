import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15161A",
        paper: "#F4F1E9",
        indigo: "#5847F2",
        clay: "#8A8779",
      },
      fontFamily: {
        // System serif/sans stacks — no external font fetch required.
        // Swap for next/font or self-hosted files whenever you like.
        display: [
          "Iowan Old Style",
          "Palatino Linotype",
          "URW Palladio L",
          "P052",
          "serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
