import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  skipNodeModulesBundle: true,
  target: "es2020",
});
