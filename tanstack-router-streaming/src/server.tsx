import {renderToPipeableStream, PipeableStream} from 'react-dom/server';
import {render} from "./entry.server.tsx";
import { isbot } from "isbot";
import {
    transformStreamWithRouter,
} from "@tanstack/react-router-server/server";
import {Writable} from "node:stream";
export default {
     async fetch(req: Request) {
        const { app, router } = await render(req);

         let statusCode = 200;

         const isCrawler = isbot(req.headers.get("user-agent"));

         const stream = await new Promise<PipeableStream>((resolve) => {
             const stream = renderToPipeableStream(app, {
                 onAllReady() {
                     if (isCrawler) {
                         console.log("onAllReady");
                         resolve(stream);
                     }
                 },
                 onShellReady() {
                     if (!isCrawler) {
                         console.log("onShellReady");
                         resolve(stream);
                     }
                 },
                 onShellError(error) {
                     console.error("onShellError", error);
                     statusCode = 500
                 },
                 onError(error) {
                     statusCode = 500
                     console.error("onError", error);
                     // TODO: logger
                 },
             })
         })

         const didError = statusCode > 399 && statusCode < 600;

         if (router.hasNotFoundMatch() && !didError) {
             statusCode = 404
         }

         const transforms = [transformStreamWithRouter(router)]

         const transformedStream = transforms.reduce(
             (stream, transform) => stream.pipe(transform as any),
             stream,
         )

         const { readable, writable } = new TransformStream();

         // transform
         transformedStream.pipe(Writable.fromWeb(writable));

         // “give up” after a timeout
         setTimeout(() => {
             stream.abort();
         }, 10000);


         return new Response(readable, {
            status: statusCode,
            headers: {
                'Content-Type': 'text/html',
            },
        });
    },
};
