import { renderAssets } from '@ssrx/react';
import { assetsForRequest } from '@ssrx/vite/runtime';
import { StrictMode } from 'react';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server';

import {routes} from "./routes.tsx";
import { App } from "./App.tsx";
export async function render(req: Request) {
    const assets = await assetsForRequest(req.url);

    const { query, dataRoutes } = createStaticHandler(routes);
    const context = await query(req);

    if (context instanceof Response) {
        throw context;
    }

    const router = createStaticRouter(dataRoutes, context);

    const app = (
        <StrictMode>
            <App head={renderAssets(assets)}>
                <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
            </App>
        </StrictMode>
    );

    return { app };
}