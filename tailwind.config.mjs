import { bibleioTheme } from '@bibleio/design';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  presets: [bibleioTheme],
  darkMode: 'class',
};
