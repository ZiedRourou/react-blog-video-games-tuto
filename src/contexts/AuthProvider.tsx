import { useState, type ReactNode } from "react"

import { AuthService } from "@/services/auth/authService.ts"
import { AuthContext } from "./AuthContext.tsx"

const authService = new AuthService()

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
