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
          950: "#0B0F12",
          900: "#12171C",
          800: "#171D23"
        },
        brand: {
          green: "#1F6B4F",
          sage: "#8FAE9D",
          ivory: "#F5F2EA"
        }
      },
      boxShadow: {
        glow: "0 20px 52px rgba(17, 22, 27, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
