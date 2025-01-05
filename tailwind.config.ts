import type { Config } from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme"

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#038C7F",
        seconary:"#F2C641",
        tertiary: {
          dark:"#F27405",
          light:"#F2C641"
        }
      },
    },
    fontFamily: {
      poppins:['var(--font-poppins)',...fontFamily.sans]
    }
  },
  plugins: [],
} satisfies Config;