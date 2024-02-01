import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {ssrx} from '@ssrx/vite/plugin';
import {tanstackRouterAdapter} from "@ssrx/plugin-tanstack-router/adapter";
import { TanStackRouterVite} from "@tanstack/router-vite-plugin";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths(),
        TanStackRouterVite({ generatedRouteTree: 'src/routes.ts' }),
        ssrx({
            // routesFile: 'src/routeTree.gen.ts',
            routesFile: 'src/routes.ts',
            clientEntry: 'src/entry.client.tsx',
            serverFile: 'src/server.tsx',
            // clientOutDir: 'dist/public',
            // serverOutDir: 'dist',
            // runtime: 'node',
            routerAdapter: tanstackRouterAdapter({
                // Override this default if needed.. the adapter expects your routes file to export the
                // route tree on this named export
                // exportName: 'routeTree',
            }),
        }),
    ],
})
