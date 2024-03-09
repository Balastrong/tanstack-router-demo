import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/settings')({
  component: () => <div>Hello /authenticated/settings!</div>
})