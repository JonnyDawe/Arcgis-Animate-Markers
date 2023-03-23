import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Arcgis-Animate-Markers/",
    server: {
        fs: { strict: false }
    },
    resolve: {
        dedupe: ["@arcgis/core"]
    },
    build: {
        chunkSizeWarningLimit: 1500
    },
    plugins: [splitVendorChunkPlugin()]
});
