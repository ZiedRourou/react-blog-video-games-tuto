export {}

declare global {
  interface ImportMetaEnv {
    readonly VITE_API_HOST: string
  }
  interface ViteTypeOptions {
    readonly strictImportMetaEnv: unknown
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
