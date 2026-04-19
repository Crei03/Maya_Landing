/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-container": "#00a6d7",
        "secondary-container": "#6cd2fe",
        "error-container": "#ffdad6",
        "primary-fixed-dim": "#6ed2ff",
        error: "#ba1a1a",
        "tertiary-fixed": "#d5e5e9",
        "tertiary-fixed-dim": "#b9c9cd",
        "on-error-container": "#93000a",
        "inverse-on-surface": "#edf1f5",
        "secondary-fixed": "#bee9ff",
        "tertiary-container": "#8c9da1",
        "on-secondary-fixed": "#001f2a",
        "primary-fixed": "#bfe8ff",
        "outline-variant": "#bdc8d0",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#005a75",
        "on-secondary-fixed-variant": "#004d65",
        "surface-tint": "#006686",
        "surface-container-low": "#eff4f8",
        "surface-container": "#eaeef3",
        "on-primary": "#ffffff",
        "on-tertiary-container": "#253438",
        outline: "#6e797f",
        "inverse-primary": "#6ed2ff",
        "surface-bright": "#f5fafe",
        background: "#f5fafe",
        "on-primary-fixed-variant": "#004d65",
        "surface-variant": "#dee3e7",
        "surface-container-highest": "#dee3e7",
        "on-surface": "#171c1f",
        "surface-container-high": "#e4e9ed",
        "on-tertiary-fixed": "#0e1e21",
        secondary: "#006685",
        "on-primary-fixed": "#001f2b",
        "on-surface-variant": "#3d484e",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "secondary-fixed-dim": "#6cd2fe",
        "inverse-surface": "#2c3134",
        surface: "#f5fafe",
        primary: "#006686",
        tertiary: "#516165",
        "on-tertiary-fixed-variant": "#3a494d",
        "on-primary-container": "#003649",
        "on-error": "#ffffff",
        "on-background": "#171c1f",
        "surface-dim": "#d6dbdf"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      }
    }
  },
  darkMode: "class"
};
