import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  staticData: { breadcrumb: "Home" },
  component: () => <div>Hello /!</div>,
});
