import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client.tsx";

export const Route = createFileRoute("/auth/otp-callback")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleAuthCallback = async () => {
      const { error, data } = await supabase.auth.getSession();

      console.log("Auth callback data:", data);

      if (error) {
        console.error("Error during auth callback:", error.message);
        await navigate({ to: "/auth" });
      } else {
        await navigate({ to: "/" });
      }
    };

    void handleAuthCallback();
  }, [navigate]);

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
