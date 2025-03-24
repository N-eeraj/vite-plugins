import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteReactRemoveAttributesPlugin from "vite-remove-attributes-plugin/ViteReactRemoveAttributesPlugin"
import ViteRemoveConsole from "vite-remove-attributes-plugin/ViteRemoveConsole"


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
