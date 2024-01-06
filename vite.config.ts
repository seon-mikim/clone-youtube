import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@apis", replacement: resolve(__dirname, "src/apis") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@constants",
        replacement: resolve(__dirname, "src/constants"),
      },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      {
        find: "@interfaces",
        replacement: resolve(__dirname, "src/interfaces"),
      },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@queries", replacement: resolve(__dirname, "src/queries") },
      { find: "@router", replacement: resolve(__dirname, "src/router") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
});
