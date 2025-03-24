import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import ViteVueRemoveAttributesPlugin from "vite-remove-attributes-plugin/ViteVueRemoveAttributesPlugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteVueRemoveAttributesPlugin("cy"),
  ],
})
