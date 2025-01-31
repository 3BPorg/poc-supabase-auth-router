import { AuthenticatedUser } from "@/components/providers/auth/types.ts";
import { createContext } from "react";

export interface AuthContextType {
  user: AuthenticatedUser | null;
  isAuthenticated: boolean;
  isAnonymous: boolean;
  logout: () => void | Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isAnonymous: false,
  logout: () => {},
});
