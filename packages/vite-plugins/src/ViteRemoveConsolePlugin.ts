import type { ViteRemoveConsoleOptions } from "./types/RemoveConsole.d.ts"

const ViteRemoveConsole = ({ enabled = true, skipFiles = [], skipMethods = [] }: ViteRemoveConsoleOptions = { enabled: true, skipFiles: [], skipMethods: [] }) => {
  return {
    name: "vite-remove-console-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      if (!enabled) return code // return untransformed code if plugin is disabled
      if (file.includes("/node_modules/")) return code // skip all node_module files
      if (skipFiles.some((skipFile) => file.endsWith(skipFile))) return code // return untransformed code if file is to be skipped

      // find console methods to remove by omitting wanted console methods
      const consoleMethodsToKeep = new Set(skipMethods)
      const consoleMethodsToRemove = Object.keys(console)
        .filter((item) => !consoleMethodsToKeep.has(item as keyof Console))

      const regex = new RegExp(`\\s*console\.(${consoleMethodsToRemove.join("|")})\(.*\)\\s*;?`, "g")
      const transformedCode = /\.(jsx|tsx|js|mjs|ts|vue)$/.test(file) ? code.replaceAll(regex, "\n") : code
      return transformedCode
    },
  } as const
}

export default ViteRemoveConsole
