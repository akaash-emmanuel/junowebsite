const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      // your paths
      "./src/**/*.{ts,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        animation: {
          aurora: "aurora 60s linear infinite",
          grid: "grid 15s linear infinite", // Added grid animation
        },
        keyframes: {
          aurora: {
            from: {
              backgroundPosition: "50% 50%, 50% 50%",
            },
            to: {
              backgroundPosition: "350% 50%, 350% 50%",
            },
          },
          grid: {
            "0%": { transform: "translateY(-50%)" },
            "100%": { transform: "translateY(0)" }, // Added grid keyframes
          },
        },
      },
    },
    plugins: [addVariablesForColors],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
  
    addBase({
      ":root": newVars,
    });
  }
  