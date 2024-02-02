import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test')({
    component: Index,
})

function Index() {
    return (
        <div>
            <h3>Welcome Test!</h3>
        </div>
    )
}

// import {createRoute} from "@tanstack/react-router";
// import {rootRoute} from "./__root.tsx";
//
// export const testRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: '/test',
//     component: Index,
// })
//
// function Index() {
//     return (
//         <div className="p-2">
//             <h3>Welcome Test!</h3>
//         </div>
//     )
// }