import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return <h3>Hello from About!</h3>
}