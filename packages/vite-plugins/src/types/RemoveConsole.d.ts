export interface ViteRemoveConsoleOptions {
  enabled?: boolean
  skipFiles?: string[]
  skipMethods?: Array<keyof typeof console>
}
