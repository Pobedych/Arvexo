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
          blue: "#006DFF",
          cyan: "#00AEEF"
        }
      },
      boxShadow: {
        glow: "0 18px 46px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
