import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import RemoveVueDataAttrs from "@n-eeraj/vite-plugins/ViteVueRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    RemoveVueDataAttrs([
      "data-test",
      "data-cy",
    ]),
    RemoveConsole(),
  ],
})
