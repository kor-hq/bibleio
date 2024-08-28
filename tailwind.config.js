import { tailwindCore } from './src/tailwind-core';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [tailwindCore],
  darkMode: ['class', '[data-mode="dark"]'],
};
