import { bibleioTheme } from '@bibleio/design';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  presets: [bibleioTheme],
  theme: {
    extend: {
      keyframes: {
        'scroll-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(1)' },
        },
        'scroll-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(1)' },
        },
      },
      animation: {
        'scroll-y': 'scroll-y 25s linear infinite',
        'scroll-x': 'scroll-x 25s linear infinite',
      },
    },
  },
};
