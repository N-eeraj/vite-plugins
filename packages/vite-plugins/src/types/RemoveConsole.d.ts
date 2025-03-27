export interface ViteRemoveConsoleOptions {
  enabled?: boolean
  excludeFiles?: string[]
  exclude?: Array<keyof typeof console>
}
