import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "./",
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
  plugins: [react()],
});
