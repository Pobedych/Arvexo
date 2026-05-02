import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070A0C",
          900: "#0D1210",
          800: "#111714"
        },
        brand: {
          green: "#22C55E",
          deep: "#1F6B4F",
          ivory: "#F5F2EA"
        }
      },
      boxShadow: {
        glow: "0 20px 52px rgba(34, 197, 94, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
