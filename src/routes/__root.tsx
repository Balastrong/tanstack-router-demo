import { Navigation } from "@/components/navigation";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";
type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="grid h-screen grid-cols-[240px_1fr]">
      <Navigation />
      <div className="h-full overflow-y-auto px-6 py-6">
        <Outlet />
      </div>
    </div>
  ),
});
