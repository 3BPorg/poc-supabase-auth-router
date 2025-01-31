import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useAuthContext } from "@/components/providers/auth/useAuthContext.ts";

const Header = () => {
  const { isAuthenticated, logout } = useAuthContext();

  return (
    <div className="p-2 flex gap-2">
      {isAuthenticated && (
        <>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>{" "}
          <a href="#" className="[&.active]:font-bold" onClick={logout}>
            Logout
          </a>
        </>
      )}
    </div>
  );
};

const RootComponent = () => {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
