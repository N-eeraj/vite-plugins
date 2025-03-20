import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: "vite-vue-remove-attributes-plugin",
      enforce: "pre",
      transform(code, file) {
        return /\.vue$/.test(file) ? code.replaceAll(/\s*:?data-cy=\".*\"/g, "") : code
      },
    },
  ],
})
