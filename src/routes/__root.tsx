import {
  createRootRouteWithContext,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useAuthContext } from "@/components/providers/auth/useAuthContext.ts";
import { RouterContext } from "@/types.ts";

const Header = () => {
  const { isAuthenticated, logout } = useAuthContext();
  console.log("isAuthenticated (header)", isAuthenticated);
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

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async ({ context, location, params }) => {
    const isAuthRoute = location.pathname.startsWith("/auth");
    console.log("beforeLoad", context, location, params);
    if (!context.auth.isAuthenticated && !isAuthRoute) {
      throw redirect({
        to: "/auth",
        search: {
          redirect: location.href,
        },
      });
    }

    if (context.auth.isAuthenticated && location.searchStr !== "") {
      throw redirect({
        to: location.search.redirect,
      });
    }
  },
  component: RootComponent,
});
