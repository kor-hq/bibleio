// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import yeskunallumami from "@yeskunall/astro-umami";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.bibleio.com",
	integrations: [
		react(),
		tailwind({ applyBaseStyles: false }),
		yeskunallumami({
			id: "3f919d73-0804-4662-b4c6-43e1551fe508",
			endpointUrl: "https://umami.cool.korhq.com",
		}),
		sitemap(),
	],
	devToolbar: {
		enabled: false,
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
	experimental: {
		contentLayer: true,
	},
});
