import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Arcgis-Animate-Markers/",
    server: {
        fs: { strict: false }
    },
    build: {
        chunkSizeWarningLimit: 1500
    },
    plugins: [splitVendorChunkPlugin()]
});
