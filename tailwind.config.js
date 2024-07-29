/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("./src/tailwind-core.ts")],
  darkMode: ["class", '[data-mode="dark"]'],
};
