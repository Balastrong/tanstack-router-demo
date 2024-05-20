import { Separator } from "@/components/ui/separator";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(hidden-folder)/layouts/_hiddenLayout")({
  component: () => (
    <div>
      <p>Hello! I'm a layout but I'm not shown in the URL 🙈</p>
      <Link to="/layouts/foo" className="underline hover:no-underline">
        Short Foo
      </Link>{" "}
      <Link to="/layouts/bar" className="underline hover:no-underline">
        Short Bar
      </Link>
      <Separator className="my-2" />
      <Outlet />
    </div>
  ),
});
