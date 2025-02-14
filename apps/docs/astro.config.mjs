import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mdx()],

	devToolbar: {
		enabled: false,
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
