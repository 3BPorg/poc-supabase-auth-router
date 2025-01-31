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

const AnonBanner = () => {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 px-4 py-2 text-center text-sm">
      <span className="text-yellow-800 dark:text-yellow-200">
        You're using an anonymous account. Your data will be lost if you don't{" "}
        <Link
          to="/auth/link-account"
          className="font-semibold underline hover:text-yellow-950 dark:hover:text-yellow-50"
        >
          create an account
        </Link>
      </span>
    </div>
  );
};

const RootComponent = () => {
  const { isAnonymous } = useAuthContext();

  return (
    <>
      {isAnonymous && <AnonBanner />}
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
