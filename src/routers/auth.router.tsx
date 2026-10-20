import { Navigate, type RouteObject } from "react-router"
import { AuthRoutes } from "@/constants/routes.constants.ts"
import HomeScreen from "@/screens/auth/home/Home.screen.tsx"
import AuthLayout from "@/components/layout/Auth.layout.tsx"

const authRouter: RouteObject[] = [
  {
    Component: AuthLayout,
    children: [
      { path: AuthRoutes.HOME, Component: HomeScreen },
      {
        path: `${AuthRoutes.POSTS}/:postId`,
        lazy: async () => {
          const postDetailModule =
            await import("@/screens/auth/postDetail/PostDetail.screen")
          return { Component: postDetailModule.default }
        },
      },
      { path: `${AuthRoutes.CATEGORIES}/:category`, Component: HomeScreen },
      {
        path: "*",
        element: <Navigate to={`/${AuthRoutes.HOME}`} replace />,
      },
    ],
  },
]

export default authRouter
