const ViteVueRemoveAttributesPlugin = (dataAttr: string = "test") => {
  return {
    name: "vite-vue-remove-attributes-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      const regex = new RegExp(`\\s*:?data-cy=\\\".*\\"`, "g")
      const transformedCode = /\.vue$/.test(file) ? code.replaceAll(regex, "") : code
      return transformedCode
    },
  } as const
}

export default ViteVueRemoveAttributesPlugin
