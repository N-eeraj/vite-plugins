import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteReactRemoveAttributesPlugin from "vite-plugins/ViteReactRemoveAttributesPlugin"
import ViteRemoveConsole from "vite-plugins/ViteRemoveConsole"


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteReactRemoveAttributesPlugin([
      "data-test",
      "data-cy",
    ]),
    ViteRemoveConsole(),
  ],
})
