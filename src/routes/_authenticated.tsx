import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({ to: "/login" });
    }
  },
});
