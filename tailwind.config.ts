import type { Config } from "tailwindcss";

/**
 * Tailwind consumes the centralized design tokens defined as CSS variables
 * in src/styles/tokens.css. Do not add raw hex/px values here or in components;
 * extend tokens.css instead so there is a single source of truth.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens are RGB channels in tokens.css; wrap with rgb(... / <alpha-value>)
        // so opacity modifiers (e.g. bg-primary/10) work correctly.
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          dark: "rgb(var(--color-accent-dark) / <alpha-value>)",
          light: "rgb(var(--color-accent-light) / <alpha-value>)",
        },
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          muted: "rgb(var(--color-surface-muted) / <alpha-value>)",
        },
        content: {
          DEFAULT: "rgb(var(--color-text) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          inverse: "rgb(var(--color-text-inverse) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        border: {
          DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
          strong: "rgb(var(--color-border-strong) / <alpha-value>)",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.5rem, 5vw, 4rem)",
          { lineHeight: "1.05", fontWeight: "600" },
        ],
        h1: ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1" }],
        h2: ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2" }],
        h3: ["1.5rem", { lineHeight: "1.3" }],
        body: ["1rem", { lineHeight: "1.6" }],
        bodySm: ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};

export default config;
