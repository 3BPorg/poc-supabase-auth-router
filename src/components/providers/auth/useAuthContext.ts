import { useContext } from "react";
import { AuthContext } from "@/components/providers/auth/AuthContext.tsx";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
