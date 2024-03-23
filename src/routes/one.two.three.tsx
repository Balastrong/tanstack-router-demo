import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/one/two/three')({
  component: () => <div>Hello /one/two/three!</div>
})