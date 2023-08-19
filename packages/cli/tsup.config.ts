import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  clean: true,
  outDir: "bin",
  format: ["iife"],
  outExtension() {
    return {
      js: `.js`,
    };
  },
});
