import { createFileRoute, useRouter } from "@tanstack/react-router";
import { isAuthenticated, signIn, signOut } from "../utils/auth";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <Typography variant={"h2"}>Login</Typography>
      {isAuthenticated() ? (
        <>
          <p>Hello user!</p>
          <Button
            variant={"destructive"}
            size={"sm"}
            onClick={async () => {
              signOut();
              router.invalidate();
            }}
            className="w-[110px]"
          >
            Sign out
          </Button>
        </>
      ) : (
        <>
          <p>Who are you?</p>
          <Button
            size={"sm"}
            onClick={async () => {
              signIn();
              router.invalidate();
            }}
            className="w-[110px]"
          >
            Sign in
          </Button>
        </>
      )}
    </div>
  );
}
