import type { Config } from "tailwindcss";
import { bibleioTheme } from "@bibleio/design/src/tailwind";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"../../packages/design/src/components/**/*.{ts,tsx,astro}",
	],
	presets: [bibleioTheme],
	darkMode: "class",
} satisfies Config;
9;
