import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import RemoveReactDataAttrs from "@n-eeraj/vite-plugins/ViteReactRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    RemoveReactDataAttrs([
      "data-test",
      "data-cy",
    ]),
    RemoveConsole(),
  ],
})
