import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { AuthContext } from "./AuthContext.tsx";
import { AuthenticatedUser } from "./types";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setUserState = (session: Session | null) => {
    setUser(
      session && {
        id: session.user.id,
        email: session.user.email,
        displayName: session.user.email || "Anonymous",
        isAnonymous: session.user.is_anonymous || false,
      },
    );
    setIsAuthenticated(!!session);
  };

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Session on mount:", session);
      setUserState(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Session on auth state change:", session);
      setUserState(session);
    });
  }, []);

  const auth = useMemo(
    () => ({ user, isAuthenticated, logout }),
    [isAuthenticated, user, logout],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
