import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon")({
  staticData: { breadcrumb: "Pokedex list" },
});
