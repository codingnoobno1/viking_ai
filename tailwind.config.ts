import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "viking-primary": "#00d4ff",
        "viking-secondary": "#7c3aed",
        "viking-accent": "#10b981",
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        rajdhani: ["Rajdhani", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spin 5s linear infinite reverse",
        "bounceX": "bounceX 1s ease-in-out infinite",
        "hologram": "hologramFlicker 8s infinite",
        "neonFlicker": "neonFlicker 5s infinite",
        "fadeInUp": "fadeInUp 0.8s ease forwards",
        "roboPulse": "roboPulse 2s ease-in-out infinite",
        "roboFloat": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scanLine": "scanLine 3s linear infinite",
        "orbitDot": "orbitDot 3s linear infinite",
        "particleFloat": "particleFloat 4s ease-in-out infinite alternate",
        "rotateRing": "rotateRing 6s linear infinite",
        "waveform": "waveform 1s ease-in-out infinite alternate",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        bounceX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.5)",
        "glow-purple": "0 0 20px rgba(124, 58, 237, 0.5)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
