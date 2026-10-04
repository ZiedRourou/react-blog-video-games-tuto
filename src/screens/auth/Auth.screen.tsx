import { createBrowserRouter, RouterProvider } from "react-router"
import { useMemo } from "react"
import authRouter from "@/routers/auth.router.tsx"

const AuthScreens = () => {
  const router = useMemo(() => createBrowserRouter(authRouter), [])

  return <RouterProvider router={router} />
}

export default AuthScreens
