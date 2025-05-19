import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173, // Change to your desired port
    strictPort: true,
    https: false, // Ensure HTTPS is disabled for local development
  },
  plugins: [react()],
});
