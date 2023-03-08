import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Arcgis-Animate-Markers/",

    build: {
        chunkSizeWarningLimit: 1500
    },
    plugins: [splitVendorChunkPlugin()]
});
