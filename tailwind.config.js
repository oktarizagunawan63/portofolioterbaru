/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Values live in index.css (:root = light, html.dark = dark)
        primary: "rgb(var(--c-primary) / <alpha-value>)",     // merah tua
        secondary: "rgb(var(--c-secondary) / <alpha-value>)", // merah hangat
        accent: "rgb(var(--c-accent) / <alpha-value>)",       // krem
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        '2xl': '1rem',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        nav: ['Outfit', '"Plus Jakarta Sans"', 'ui-sans-serif', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
