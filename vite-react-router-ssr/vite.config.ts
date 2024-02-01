import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ssrx } from '@ssrx/vite/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      ssrx({
          // routesFile: 'src/routes.tsx',
          clientEntry: 'src/main.tsx',
          serverFile: 'src/server.tsx',
          // clientOutDir: 'dist/public',
          // serverOutDir: 'dist',
          // runtime: 'node',
          // routerAdapter: defaultRouterAdapter,
      }),
  ],
})
