import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"],
        accent: ["var(--font-accent)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--color-foreground))',
            maxWidth: '65ch',
            h1: {
              fontFamily: 'var(--font-heading)',
            },
            h2: {
              fontFamily: 'var(--font-heading)',
            },
            h3: {
              fontFamily: 'var(--font-heading)',
            },
            h4: {
              fontFamily: 'var(--font-heading)',
            },
            'h1, h2, h3, h4': {
              color: 'rgb(var(--color-foreground))',
              fontWeight: '700',
            },
            strong: {
              color: 'rgb(var(--color-foreground))',
              fontWeight: '600',
            },
            a: {
              color: 'rgb(var(--color-primary))',
              textDecoration: 'none',
              '&:hover': {
                color: 'rgb(var(--color-primary) / 0.8)',
              },
            },
            code: {
              color: 'rgb(var(--color-primary))',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
