import { Header } from "@/components/header";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";
type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="grid grid-rows-[auto,_1fr] h-full">
      <Header />
      <div className="h-full px-4">
        <Outlet />
      </div>
    </div>
  ),
});
