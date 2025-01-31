import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/otp-callback")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="auth-callback">
      <p>Processing authentication...</p>
      <style>{`
        .auth-callback {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 1rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}
