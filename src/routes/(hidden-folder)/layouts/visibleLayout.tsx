import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(hidden-folder)/layouts/visibleLayout")({
  component: () => (
    <div>
      <p>This layout is visible in the URL 👀</p>
      <Link to="/layouts/visibleLayout/foo">Foo</Link>{" "}
      <Link to="/layouts/visibleLayout/bar">Bar</Link>
      <hr />
      <Outlet />
    </div>
  ),
  notFoundComponent: () => (
    <div>I'm the Not found page, inside /visibleLayout</div>
  ),
});
