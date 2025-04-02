import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import RemoveSveleteDataAttrs from "@n-eeraj/vite-plugins/ViteSveleteRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    RemoveSveleteDataAttrs([
      "data-test",
      "data-cy",
    ]),
    RemoveConsole(),
  ],
})
