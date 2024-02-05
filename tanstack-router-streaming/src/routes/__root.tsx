import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {Link, Outlet, createRootRouteWithContext, useRouter} from '@tanstack/react-router'
import { DehydrateRouter } from '@tanstack/react-router-server/client'
import React from "react";
export const Route = createRootRouteWithContext<{
    assets: React.ReactNode
}>()({
    component: RootComponent,
    notFoundComponent: () => <h1 style={{color: "red"}}>Ooops...</h1>
})

function RootComponent() {
    const router = useRouter();

    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/src/index.css" />
            <title>Vite App</title>
            <script
                type="module"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: `
              import RefreshRuntime from "/@react-refresh"
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
            `,
                }}
            />
            {router.options.context.assets}
            {/*<script type="module" src="/@vite/client" />*/}
            {/*<script type="module" src="/src/entry.client.tsx" />*/}
        </head>
        <body>
        <div>
            <Link
                to="/"
                activeOptions={{ exact: true }}
            >
                Home
            </Link>{' '}
            <Link
                to="/about"
                activeOptions={{ exact: true }}
            >
                About
            </Link>{' '}
            <Link
                to="/test"
                activeOptions={{ exact: true }}
            >
                Test
            </Link>
        </div>
        <hr />
        <Outlet /> {/* Start rendering routes matches */}
        <TanStackRouterDevtools position="bottom-right" />
        <DehydrateRouter />
        </body>
        </html>
    )
}
