const ViteReactRemoveAttributesPlugin = (dataAttr: string = "test") => {
  return {
    name: "vite-react-remove-attributes-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      const regex = new RegExp(`\\s*data-${dataAttr}=\\{?\\".*\\"\\}?`, "g")
      const transformedCode = /\.(jsx|tsx|js|ts)$/.test(file) ? code.replaceAll(regex, "") : code
      return transformedCode
    },
  } as const
}

export default ViteReactRemoveAttributesPlugin
