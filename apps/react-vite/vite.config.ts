import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteReactRemoveAttributesPlugin from "vite-remove-attributes-plugin/ViteReactRemoveAttributesPlugin"


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteReactRemoveAttributesPlugin("cy"),
  ],
})
