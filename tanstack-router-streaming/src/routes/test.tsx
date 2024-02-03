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