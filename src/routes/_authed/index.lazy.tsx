import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authed/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authed/"!!</div>;
}
