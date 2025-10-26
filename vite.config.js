import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
    plugins: [vue({ template: { transformAssetUrls } }), quasar({ sassVariables: "src/assets/quasar.variables.sass" })],
    resolve: { alias: { "@": fileURLToPath(new URL("", import.meta.url)) } },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                additionalData: `@use "src/assets/style.scss" as *;`,
            },
        },
    },
    base: "/",
    server: {
        host: "0.0.0.0",
        port: 5173,
        watch: { usePolling: true },
        hmr: { host: "localhost" },
    },
});
