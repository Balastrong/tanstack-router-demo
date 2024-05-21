import Typography from "@/components/ui/typography";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Profile,
});

function Profile() {
  return (
    <div>
      <Typography variant={"h2"}>Profile</Typography>
    </div>
  );
}
