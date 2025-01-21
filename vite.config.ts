import react from "@vitejs/plugin-react";
import { resolve } from "path"; // Change to this
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // Use resolve instead of path.resolve
    },
  },
});
