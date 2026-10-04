import { Navigate, useLocation } from "react-router-dom"
import type { ReactNode } from "react"
import { useAuth } from "@/contexts/AuthContext.tsx"

export const AuthenticatedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const location = useLocation()

  if (user) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />
  }

  return children
}
