import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  dts: { resolve: true },
  format: ["cjs", "esm"],
  skipNodeModulesBundle: true,
  target: "es2020",
  minify: false,
});
