import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@layout", replacement: path.resolve(__dirname, "src/layouts") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@images",
        replacement: path.resolve(__dirname, "src/assets/images"),
      },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "src/assets/styles"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@api", replacement: path.resolve(__dirname, "src/api") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@zustand", replacement: path.resolve(__dirname, "src/zustand") },
    ],
  },
  server: {
    open: true,
  },
  plugins: [react(), svgr()],
});
