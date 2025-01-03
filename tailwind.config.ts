import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        soft_background: "var(--softBg)",
        text_color: "var(--textColor)",
        text_color_soft: "var(--softTextColor)",
      },
    },
  },
  plugins: [],
} satisfies Config;
