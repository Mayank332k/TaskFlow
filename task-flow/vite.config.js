import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // LAN pe expose karega
    port: 5173,      // default vite port
  },
});