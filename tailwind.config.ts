import type { Config } from "tailwindcss";
<<<<<<< HEAD
import tailwindcssAnimate from "tailwindcss-animate";
=======
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}", "./providers/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        indigo: "hsl(var(--indigo))",
        rose: "hsl(var(--rose))"
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem", "3xl": "2rem" },
      boxShadow: { glow: "0 24px 80px hsl(var(--primary) / 0.18)" }
    }
  },
<<<<<<< HEAD
  plugins: [tailwindcssAnimate]
=======
  plugins: [require("tailwindcss-animate")]
>>>>>>> efe86ce617b4656305b9130a3aaf0bc52436adba
};

export default config;
