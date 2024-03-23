import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/foo/bar/baz')({
  component: () => <div>Hello /foo/bar/baz!</div>
})