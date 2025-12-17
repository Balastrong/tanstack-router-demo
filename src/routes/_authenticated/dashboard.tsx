import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { signOut } = useAuth();

  return (
    <div className="flex flex-col gap-2">
      Hello /authenticated/dashboard!
      <Button
        variant={"destructive"}
        size={"sm"}
        onClick={signOut}
        className="w-[110px]"
      >
        Sign out
      </Button>
    </div>
  );
}
