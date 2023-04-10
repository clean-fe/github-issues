import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  root: "src",
  build: {
    outDir: "./dist",
  },
  plugins: [babel()],
});
