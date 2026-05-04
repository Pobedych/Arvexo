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
        carbon: "#191919",
        graphite: "#414042",
        "deep-space": "#2c2c2c",
        "input-gray": "#58595b",
        "cadet-gray": "#a7a9ac",
        "silver-mist": "#d1d3d4",
        stardust: "#f8f8f2",
        mercury: "#ffffff",
        "launch-violet": "#7084ff",
        "ocean-blue": "#0073e6",
        "electric-cyan-start": "#405bff",
        "electric-cyan-end": "#3dd6f5"
      },
      boxShadow: {
        nav: "rgba(0, 0, 0, 0.45) 0px 4px 20px 0px",
        panel: "0 20px 64px rgba(0, 0, 0, 0.32)"
      },
      borderRadius: {
        card: "30px",
        button: "30px",
        pill: "60px",
        nav: "4px"
      },
      maxWidth: {
        page: "1188px"
      }
    }
  },
  plugins: []
};

export default config;
