import { ViteRemoveDataAttrsOptions } from "./types/RemoveDataAttrs"

const DEFAULT_OPTIONS = {
  enabled: true,
  excludeFiles: [],
}

const RemoveSvelteDataAttrs = (dataAttrs: Array<`data-${string}`> = [], {
  enabled = true,
  excludeFiles = [],
}: ViteRemoveDataAttrsOptions = DEFAULT_OPTIONS) => {
  return {
    name: "vite-svelte-remove-attributes-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      if (!enabled) return code // return untransformed code if plugin is disabled
      if (excludeFiles.some((skipFile) => file.endsWith(skipFile))) return code // return untransformed code if file is to be skipped

      let transformedCode = code
      dataAttrs.forEach((dataAttr) => {
        const staticRegex = new RegExp(`\\s*${dataAttr}=\\{?"[^"]*"\\}?`, "g")
        const dynamicRegex = new RegExp(`\\s*\\$\\.set_attribute\\(.+, ('|")${dataAttr}('|"), ('|").*('|")\\);`, "g")
        transformedCode = /\.svelte$/.test(file) ? transformedCode.replaceAll(dynamicRegex, "") : transformedCode
        transformedCode = /\.svelte$/.test(file) ? transformedCode.replaceAll(staticRegex, "") : transformedCode
      })
      return transformedCode
    },
  } as const
}

export default RemoveSvelteDataAttrs
