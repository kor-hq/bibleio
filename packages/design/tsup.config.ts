import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "!src/**/*.{astro}"],
	outDir: "dist",
	splitting: true,
	treeshake: true,
	sourcemap: true,
	clean: true,
	dts: { resolve: true },
	format: "esm",
	skipNodeModulesBundle: true,
	target: "es2022",
	minify: true,
});
