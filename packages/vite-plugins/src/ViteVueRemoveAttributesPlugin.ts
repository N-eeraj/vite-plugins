const RemoveVueDataAttrs = (dataAttrs: Array<`data-${string}`> = []) => {
  return {
    name: "vite-vue-remove-attributes-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      let transformedCode = code
      dataAttrs.forEach((dataAttr) => {
        const regex = new RegExp(`\\s*:?${dataAttr}="[^"]*"`, "g")
        transformedCode = /\.vue$/.test(file) ? transformedCode.replaceAll(regex, "") : transformedCode
      })
      return transformedCode
    },
  } as const
}

export default RemoveVueDataAttrs
