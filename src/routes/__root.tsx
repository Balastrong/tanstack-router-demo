import { Navigation } from "@/components/navigation";
import { RouterBreadcrumb } from "@/components/navigation/RouterBreadcrumb";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

type RouterContext = { authentication: AuthContext };

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="grid h-screen grid-cols-[240px_1fr]">
      <Navigation />
      <div className="h-full overflow-y-auto px-6 py-6">
        <div className="flex h-full flex-col gap-4">
          <RouterBreadcrumb />
          <Outlet />
          <TanStackRouterDevtools position="bottom-right" />
        </div>
      </div>
    </div>
  ),
});
