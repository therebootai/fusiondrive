/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "site-primary": "#FF7700",
        "site-secondary": "#112F44",
        "site-typo-secondary": "#777777",
        "site-border": "#F0F0F0",
      },
      boxShadow: {
        "site-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      screens: {
        xlg: "1440px",
      },
      backgroundImage: {
        "custom-gradient-transparent-to-dark":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 68.5%, rgba(0, 0, 0, 0.80) 100%)",
        "custom-gradient-amber-to-dark":
          "linear-gradient(180deg, #F70 0%, #020202 100%)",
      },
    },
  },
  plugins: [],
};
