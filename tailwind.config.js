/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // ✅ Agency Color System
      colors: {
        "dark-bg": "var(--color-dark-bg)",
        "dark-card": "var(--color-dark-card)",
        "primary-blue": "var(--color-primary)",
        "accent-gold": "var(--color-accent)",
        "text-light": "var(--color-text-light)",
        "text-gray": "var(--color-text-darker)",
      },

      // ✅ Agency Font System
      fontFamily: {
        sans: ["Inter", "sans-serif"],         // Body text
        heading: ["Poppins", "sans-serif"],    // Headings
      },

      // ✅ Smooth Animations
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
};
