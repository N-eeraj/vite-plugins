import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import RemoveSveleteDataAttrs from "@n-eeraj/vite-plugins/ViteSveleteRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"

export default defineConfig({
	plugins: [
		sveltekit(),
    RemoveSveleteDataAttrs([
      "data-test",
      "data-cy",
    ]),
    RemoveConsole(),
	]
})
