import {
  defineConfig,
  loadEnv,
} from 'vite'
import react from '@vitejs/plugin-react-swc'
import RemoveReactDataAttrs from "@n-eeraj/vite-plugins/ViteReactRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      react(),
      RemoveReactDataAttrs([
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
