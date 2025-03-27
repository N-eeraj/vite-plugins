import { ViteRemoveDataAttrsOptions } from "./types/RemoveDataAttrs"

const DEFAULT_OPTIONS = {
  enabled: true,
  excludeFiles: [],
}

const RemoveVueDataAttrs = (dataAttrs: Array<`data-${string}`> = [], {
  enabled = true,
  excludeFiles = [],
}: ViteRemoveDataAttrsOptions = DEFAULT_OPTIONS) => {
  return {
    name: "vite-vue-remove-attributes-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      if (!enabled) return code // return untransformed code if plugin is disabled
      if (excludeFiles.some((skipFile) => file.endsWith(skipFile))) return code // return untransformed code if file is to be skipped

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
