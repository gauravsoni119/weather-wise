/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAPID_HOST: string;
  readonly VITE_RAPID_API_KEY: string;
  readonly VITE_USE_MOCK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
