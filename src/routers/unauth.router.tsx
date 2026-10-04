import { Navigate, type RouteObject } from "react-router"
import { UnauthRoutes } from "@/constants/routes.constants.ts"
import UnauthLayout from "@/components/layout/Unauth.layout.tsx"
import LoginScreen from "@/screens/unauth/login/Login.screen.tsx"

const unauthRouter: RouteObject[] = [
  {
    Component: UnauthLayout,
    children: [
      { path: UnauthRoutes.LOGIN, Component: LoginScreen },
      {
        path: UnauthRoutes.SIGNUP,
        lazy: async () => {
          const signupModule =
            await import("@/screens/unauth/signup/Signup.screen")
          return { Component: signupModule.default }
        },
      },
      {
        path: "*",
        element: <Navigate to={`/${UnauthRoutes.LOGIN}`} replace />,
      },
    ],
  },
]

export default unauthRouter
