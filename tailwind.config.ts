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
        "red-secondary-two": "#DB4444",
        "color300" : "#2F2E30",
        "secondaryBlue" : "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
