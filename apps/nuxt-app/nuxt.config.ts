// https://nuxt.com/docs/api/configuration/nuxt-config
import RemoveVueDataAttrs from "@n-eeraj/vite-plugins/ViteVueRemoveAttributesPlugin"
import RemoveConsole from "@n-eeraj/vite-plugins/ViteRemoveConsolePlugin"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      RemoveVueDataAttrs([
        "data-test",
        "data-cy",
      ]),
      RemoveConsole(),
    ]
  }
})
