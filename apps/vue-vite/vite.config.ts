import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import ViteVueRemoveAttributesPlugin from "vite-plugins/ViteVueRemoveAttributesPlugin"
import ViteRemoveConsole from "vite-plugins/ViteRemoveConsole"

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
