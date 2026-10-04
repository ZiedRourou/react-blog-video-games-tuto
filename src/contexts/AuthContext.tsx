import { createContext, useContext } from "react"
import type { AuthContextType } from "@/services/auth/types/authTypes.ts"

export const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth doit être utilisé dans un <AuthProvider>")
  return ctx
}
