import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "var(--brand-red)",
          "red-deep": "var(--brand-red-deep)",
          "red-soft": "var(--brand-red-soft)",
          "red-glow": "var(--brand-red-glow)",
          "red-tint": "var(--brand-red-tint)",
        },
        bg: {
          base: "var(--bg-base)",
          deep: "var(--bg-deep)",
          elev: "var(--bg-elev)",
        },
        fg: {
          1: "var(--fg-1)",
          2: "var(--fg-2)",
          3: "var(--fg-3)",
        },
        hairline: "var(--hairline)",
        "hairline-strong": "var(--hairline-strong)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        pill: "var(--r-pill)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

