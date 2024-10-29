import { bibleioTheme } from '@bibleio/design';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  presets: [bibleioTheme],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        scrollY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(1)' },
        },
        scrollX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(1)' },
        },
      },
      animation: {
        scrollY: 'scrollY 25s linear infinite',
        scrollX: 'scrollX 25s linear infinite',
      },
    },
  },
};
