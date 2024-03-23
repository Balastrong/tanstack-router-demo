import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden-folder)/first-level')({
  component: () => <div>Hello /(hidden-folder)/first-level!</div>
})