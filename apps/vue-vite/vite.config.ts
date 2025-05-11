import {
  defineConfig,
  loadEnv,
} from 'vite'
import vue from "@vitejs/plugin-vue"
import RemoveVueDataAttrs from "@n-eeraj/vite-plugins/ViteVueRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue(),
      RemoveVueDataAttrs([
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
