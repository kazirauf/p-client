// tailwind.config.ts

import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // Import DaisyUI

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui], // Use the imported DaisyUI plugin here
};

export default config;
