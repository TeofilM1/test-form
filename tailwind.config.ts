import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/domain/Home/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        toLeft: {
          "0%": { transform: "translatex(100%)" },
          "100%": { transform: "translatex(0%)" },
        },
        toRight: {
          "0%": { transform: "translatex(-100%)" },
          "100%": { transform: "translatex(0%)" },
        },
      },
      animation: {
        toLeft: "toLeft 200ms ease-in",
        toRight: "toRight 200ms ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
