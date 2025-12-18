import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { BreadcrumbValue } from "./components/navigation/RouterBreadcrumb";
import { useAuth } from "./hooks/useAuth";
import { routeTree } from "./routeTree.gen";

// const stepsMask = createRouteMask({
//   routeTree,
//   from: "/steps",
//   to: "/steps",
//   search: (prev) => ({ ...prev, step: undefined }),
// });

const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
  defaultNotFoundComponent: () => <div>Global Not Found :(</div>,
  //  routeMasks: [stepsMask],
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  interface StaticDataRouteOption {
    breadcrumb?: BreadcrumbValue;
  }
}

function App() {
  const authentication = useAuth();
  return <RouterProvider router={router} context={{ authentication }} />;
}

export default App;
