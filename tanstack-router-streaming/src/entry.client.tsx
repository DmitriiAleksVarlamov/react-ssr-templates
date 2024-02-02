import {hydrateRoot} from 'react-dom/client'

import { StartClient } from '@tanstack/react-router-server/client'
import {startTransition, StrictMode} from "react";
import { createAppRouter } from "./router.tsx";


const hydrate = async () => {
    const router = createAppRouter();

    // await router.load();
    // await router.hydrate();

    startTransition(() => {
        hydrateRoot(
            document,
            <StrictMode>
                <StartClient router={router} />
            </StrictMode>
        )
    });
}

void hydrate()