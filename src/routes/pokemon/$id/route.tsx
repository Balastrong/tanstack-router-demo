import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$id")({
  staticData: {
    breadcrumb: (match) => `#${match.params.id}`,
  },
});
