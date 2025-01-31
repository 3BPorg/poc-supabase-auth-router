import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/link-account')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/link-account"!</div>
}
