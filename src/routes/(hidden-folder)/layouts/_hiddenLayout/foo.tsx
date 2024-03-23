import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden-folder)/layouts/_hiddenLayout/foo')({
  component: () => <div>Hello /(hidden-folder)/layouts/_hiddenLayout/foo!</div>
})