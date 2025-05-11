import {
  defineConfig,
  loadEnv,
} from 'vite'
import { svelte } from "@sveltejs/vite-plugin-svelte"
import RemoveSveleteDataAttrs from "@n-eeraj/vite-plugins/ViteSveleteRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      svelte(),
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
