import { createContext, useContext, useState, type ReactNode } from "react"
import type { AuthContextType } from "@/services/auth/types/auth-types.ts"

import { AuthService } from "@/services/auth/authService.ts"

const authService = new AuthService()
const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  async function login(email: string, password: string) {
    const res = await authService.login(email, password)
    console.log("enregistré")
    setUser(res.user)
  }

  async function register(email: string, username: string, password: string) {
    const res = await authService.register(email, username, password)
    setUser(res.user)
  }

  async function logout() {
    await authService.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth doit être utilisé dans un <AuthProvider>")
  return ctx
}
