import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), mdx(), svelte()],

    devToolbar: {
        enabled: false,
    },

    vite: {
        plugins: [tailwindcss()],
    },
});