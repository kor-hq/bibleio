// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import yeskunallumami from "@yeskunall/astro-umami";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://www.bibleio.com",
	integrations: [
		react(),
		yeskunallumami({
			id: "3f919d73-0804-4662-b4c6-43e1551fe508",
			endpointUrl: "https://umami.cool.korhq.com",
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: {
		enabled: true,
	},
	// for loading images from the notion cms
	image: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.amazonaws.com",
			},
		],
	},
});
