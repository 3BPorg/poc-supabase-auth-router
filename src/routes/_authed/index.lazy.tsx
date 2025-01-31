import { createLazyFileRoute } from "@tanstack/react-router";
import { useAuthContext } from "@/components/providers/auth/useAuthContext.ts";

export const Route = createLazyFileRoute("/_authed/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuthContext();
  return <div>Authed as {user!.displayName}</div>;
}
