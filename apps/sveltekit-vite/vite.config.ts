import {
  defineConfig,
  loadEnv,
} from 'vite'
import { sveltekit } from "@sveltejs/kit/vite"
import RemoveSveleteDataAttrs from "@n-eeraj/vite-plugins/ViteSveleteRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      sveltekit(),
      RemoveSveleteDataAttrs([
        "data-test",
        "data-cy",
      ], {
        enabled: env.VITE_STRIP_DATA_ATTRIBUTES === "true",
      }),
      RemoveConsole({
        enabled: env.VITE_DISABLE_CONSOLE === "true",
      }),
    ],
  }
})
