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
         "text-two-black": "#0D0D0D"
      },
    },
  },
  plugins: [],
} satisfies Config;
