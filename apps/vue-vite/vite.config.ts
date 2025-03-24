import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import ViteVueRemoveAttributesPlugin from "vite-remove-attributes-plugin/ViteVueRemoveAttributesPlugin"
import ViteRemoveConsole from "vite-remove-attributes-plugin/ViteRemoveConsole"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteVueRemoveAttributesPlugin([
      "data-test",
      "data-cy",
    ]),
    ViteRemoveConsole(),
  ],
})
