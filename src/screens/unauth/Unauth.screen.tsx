import { createBrowserRouter, RouterProvider } from "react-router"
import { useMemo } from "react"
import unauthRouter from "@/routers/unauth.router.tsx"

const UnauthScreen = () => {
  const router = useMemo(() => createBrowserRouter(unauthRouter), [])

  return <RouterProvider router={router} />
}

export default UnauthScreen
