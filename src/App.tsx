import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen.ts";
import { useAuthContext } from "@/components/providers/auth/useAuthContext.ts";
import { useEffect } from "react";

const router = createRouter({
  routeTree,
  context: { auth: undefined! },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const auth = useAuthContext();

  console.log("auth changed", auth);

  useEffect(() => {
    console.log("invalidating router");

    router.invalidate();
  }, [auth.isAuthenticated]);

  return <RouterProvider router={router} context={{ auth }} />;
};
