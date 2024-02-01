import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div>
            <h3>Welcome Home!</h3>
        </div>
    )
}

// import {createRoute} from "@tanstack/react-router";
// import {rootRoute} from "./__root.tsx";
//
// export const indexRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: '/',
//     component: Index,
// })
//
// function Index() {
//     return (
//         <div className="p-2">
//             <h3>Welcome Home!</h3>
//         </div>
//     )
// }