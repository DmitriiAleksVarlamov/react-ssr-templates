import {StrictMode, Suspense} from 'react';

import {createMemoryHistory} from "@tanstack/react-router";
import { StartServer } from '@tanstack/react-router-server/server';
import {createAppRouter} from "./router.tsx";
import { renderAssets } from '@ssrx/react';
import { assetsForRequest } from '@ssrx/vite/runtime';

export async function render(req: Request) {
    const url = new URL(req.url, "http://localhost");
    const href = url.href.replace(url.origin, "");

    const assets = await assetsForRequest(url.toString());
    const router = createAppRouter()


    const memoryHistory = createMemoryHistory({
        initialEntries: [href],
    })

    router.update({
        history: memoryHistory,
        context: {
            assets: <Suspense>{renderAssets(assets)}</Suspense>,
        }
    })

    await router.load()

    const app = (
        <StrictMode>
            <StartServer router={router} />
        </StrictMode>
    );

    return { app, router };
}