// https://nuxt.com/docs/api/configuration/nuxt-config
import ViteVueRemoveAttributesPlugin from "vite-remove-attributes-plugin/ViteVueRemoveAttributesPlugin"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      ViteVueRemoveAttributesPlugin([
        "data-test",
        "data-cy",
      ]),
    ]
  }
})
