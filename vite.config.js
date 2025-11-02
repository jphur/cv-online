import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
    plugins: [vue({ template: { transformAssetUrls } }), quasar()],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                additionalData: (content, filePath) => {
                    if (filePath.includes("style.scss") || filePath.includes("quasar.variables.scss")) return content;
                    return `@use "@/assets/style.scss" as *;\n@import "@/assets/quasar.variables.scss";\n${content}`;
                },
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
