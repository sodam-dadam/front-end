import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import rollupNodePolyFill from "rollup-plugin-polyfill-node";

export default defineConfig({
    resolve: {
        alias: {
            timers: "rollup-plugin-node-polyfills/polyfills/timers",
        },
    },
    build: {
        plugins: [
            rollupNodePolyFill(),
           react()
        ],
    },
});
