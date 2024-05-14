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
        "backgroud": "#000000",
        "texto": "#f1f1f1",
        "primaria": "#8b11f8",
        "secundaria": "#FF1E56",

      },
    },
  },
  plugins: [],
};
export default config;
