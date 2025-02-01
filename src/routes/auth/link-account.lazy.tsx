import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { supabase } from "@/integrations/supabase/client.tsx";
import { useAuthContext } from "@/components/providers/auth/useAuthContext.ts";

export const Route = createLazyFileRoute("/auth/link-account")({
  component: RouteComponent,
});

type AnonSignupPageView = "signup" | "email_verification" | "verified";

function RouteComponent() {
  const { isAnonymous } = useAuthContext();
  const [view, setView] = useState<AnonSignupPageView>("signup");

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAnonymous) {
      setView("verified");
    }
  }, [isAnonymous]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { error: updateError } = await supabase.auth.updateUser(
        {
          email,
        },
        {
          emailRedirectTo: window.location.origin + "/auth/link-account",
        },
      );

      if (updateError) {
        setError(
          "This email is already in use, please use a different email or login with your existing account.",
        );
      }
      setView("email_verification");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto mt-20 p-6">
      <div className="space-y-6">
        {(error || view === "signup") && (
          <>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Create Your Account</h1>
              <p className="text-muted-foreground">
                Convert your anonymous account to a permanent one
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="text-sm text-red-500 text-center">{error}</div>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </>
        )}
        {!error && view === "email_verification" && (
          <>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Email Verification</h1>
              <p className="text-muted-foreground">
                Please check your email and click the link to verify your
                account then login with your email into the app. If you don't
                see the email, please check your spam folder or{" "}
                <a href="#" onClick={() => setView("signup")}>
                  resend the verification email
                </a>
                .
              </p>
            </div>
          </>
        )}
        {!error && view === "verified" && (
          <>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Account Verified</h1>
              <p className="text-muted-foreground">
                Your account has been verified and linked to your email! You may
                now <Link to={"/"}>continue to use the application</Link>{" "}
                without losing your data.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
