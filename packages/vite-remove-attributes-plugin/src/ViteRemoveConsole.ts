const ViteRemoveConsole = () => {
  return {
    name: "vite-remove-console-plugin",
    enforce: "pre",
    transform(code: string, file: string) {
      const regex = new RegExp(`\\s*console\.(${Object.keys(console).join("|")})\(.*\)\\s*;?`, "g")
      if (file.includes("/node_modules/")) return code
      return /\.(jsx|tsx|js|mjs|ts|vue)$/.test(file) ? code.replaceAll(regex, "\n") : code
    },
  } as const
}

export default ViteRemoveConsole
