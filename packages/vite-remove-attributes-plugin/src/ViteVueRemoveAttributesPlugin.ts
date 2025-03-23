const ViteVueRemoveAttributesPlugin = () => {
  return {
    name: "vite-vue-remove-attributes-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      return /\.vue$/.test(file) ? code.replaceAll(/\s*:?data-cy=\".*\"/g, "") : code
    },
  } as const
}

export default ViteVueRemoveAttributesPlugin
