const ViteReactRemoveAttributesPlugin = () => {
  return {
    name: "vite-react-remove-attributes-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      return /\.(jsx|tsx|js|ts)$/.test(file) ? code.replaceAll(/\s*data-cy=\{?\".*\"\}?/g, "") : code
    },
  } as const
}

export default ViteReactRemoveAttributesPlugin
