import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "vite-react-remove-attributes-plugin",
      enforce: "pre",
      transform(code, file) {
        return /\.(jsx|tsx)$/.test(file) ? code.replaceAll(/\s*data-cy=\{?\".*\"\}?/g, "") : code
      },
    },
  ],
})
