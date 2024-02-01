import { hydrateRoot } from 'react-dom/client';
import { App } from "./App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { routes } from "./routes.tsx";
import {startTransition, StrictMode} from "react";

async function hydrate() {
    const router = createBrowserRouter(routes);

    startTransition(() => {
        hydrateRoot(
            document,
            <StrictMode>
                <App>
                    <RouterProvider router={router} fallbackElement={null} />
                </App>
            </StrictMode>,
        );
    });
}

void hydrate()