import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(hidden-folder)/layouts/visibleLayout/bar"
)({
  component: () => <div>Hello /(hidden-folder)/layouts/visibleLayout/bar!</div>,
});
