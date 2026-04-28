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
          950: "#030711",
          900: "#07101f",
          800: "#0d172b"
        },
        neon: {
          blue: "#4f8cff",
          cyan: "#5ce7ff",
          violet: "#8b5cff",
          magenta: "#b446ff"
        }
      },
      boxShadow: {
        glow: "0 0 34px rgba(79, 140, 255, 0.28)",
        "glow-violet": "0 0 38px rgba(139, 92, 255, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
