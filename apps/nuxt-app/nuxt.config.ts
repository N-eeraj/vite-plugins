// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      {
        name: "vite-vue-remove-attributes-plugin",
        enforce: "pre",
        transform(code, file) {
          return /\.vue$/.test(file) ? code.replaceAll(/\s*:?data-cy=\".*\"/g, "") : code
        },
      },
    ]
  }
})
