import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useAuthContext } from "@/components/providers/auth/useAuthContext.ts";

const Header = () => {
  const { isAuthenticated, logout } = useAuthContext();

  return (
    <div className="p-2 flex gap-2">
      {isAuthenticated && (
        <a href="#" className="[&.active]:font-bold" onClick={logout}>
          Logout
        </a>
      )}
    </div>
  );
};

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
