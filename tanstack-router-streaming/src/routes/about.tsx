import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return <div className="p-2">Hello from About!</div>
}

// import {createRoute} from "@tanstack/react-router";
// import {rootRoute} from "./__root.tsx";
//
// export const aboutRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: '/about',
//     component: Index,
// })
//
// function Index() {
//     return (
//         <div className="p-2">
//             <h3>Welcome About!</h3>
//         </div>
//     )
// }