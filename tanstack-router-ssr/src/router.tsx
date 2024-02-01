import { createRouter } from '@tanstack/react-router'
import {routeTree} from "./routes.ts";

export function createAppRouter() {
    return createRouter({
        routeTree,
        context: { assets: null },
    })
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}