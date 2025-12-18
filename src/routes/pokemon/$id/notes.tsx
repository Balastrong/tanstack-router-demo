import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$id/notes")({
  staticData: { breadcrumb: "Notes" },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <p>Let's take some notes</p>

      <Textarea placeholder="Write your notes here..." />
    </>
  );
}
