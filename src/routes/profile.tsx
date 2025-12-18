import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import { createFileRoute, redirect, useBlocker } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({ to: "/login" });
    }
  },
  staticData: { breadcrumb: "Profile" },
  component: Profile,
});

function Profile() {
  const [name, setName] = useState("");
  const { proceed, reset, status } = useBlocker({ condition: !!name });

  return (
    <div>
      <Typography variant={"h2"}>Profile</Typography>
      <Input
        className="w-48"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <AlertDialog open={status === "blocked"}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to leave?</AlertDialogTitle>
            <AlertDialogDescription>
              You might have some unsaved changes in this page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={reset}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={proceed}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
