import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
    plugins: [vue({ template: { transformAssetUrls } }), quasar({ sassVariables: "@/assets/quasar.variables.scss", animation: "all" })],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                additionalData: '@import "@/assets/style.scss";',
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
