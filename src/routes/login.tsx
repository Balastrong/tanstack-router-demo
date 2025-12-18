import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { useAuth } from "@/hooks/useAuth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  staticData: { breadcrumb: "Login" },
  component: Login,
});

function Login() {
  const { isLogged, signIn, signOut } = useAuth();
  const loggedIn = isLogged();

  return (
    <div className="flex flex-col gap-2">
      <Typography variant={"h2"}>Login</Typography>
      {loggedIn ? (
        <>
          <p>Hello user!</p>
          <Button
            variant={"destructive"}
            size={"sm"}
            onClick={signOut}
            className="w-[110px]"
          >
            Sign out
          </Button>
        </>
      ) : (
        <>
          <p>Who are you?</p>
          <Button size={"sm"} onClick={signIn} className="w-[110px]">
            Sign in
          </Button>
        </>
      )}
    </div>
  );
}
