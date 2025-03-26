// https://nuxt.com/docs/api/configuration/nuxt-config
import ViteVueRemoveAttributesPlugin from "vite-plugins/ViteVueRemoveAttributesPlugin"
import ViteRemoveConsole from "vite-plugins/ViteRemoveConsole"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      ViteVueRemoveAttributesPlugin([
        "data-test",
        "data-cy",
      ]),
      ViteRemoveConsole(),
    ]
  }
})
