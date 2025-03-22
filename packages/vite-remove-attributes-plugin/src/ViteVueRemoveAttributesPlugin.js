export const ViteVueRemoveAttributesPlugin = () => {
  return {
    name: "vite-vue-remove-attributes-plugin",
    enforce: "pre",
    transform(code, file) {
      return /\.vue$/.test(file) ? code.replaceAll(/\s*:?data-cy=\".*\"/g, "") : code
    },
  }
}

export default ViteVueRemoveAttributesPlugin
