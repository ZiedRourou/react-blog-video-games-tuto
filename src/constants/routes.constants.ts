export const UnauthRoutes = {
  LOGIN: "login",
  SIGNUP: "signup",
} as const

export const AuthRoutes = {
  HOME: "home",
} as const

export type UnauthRoute = (typeof UnauthRoutes)[keyof typeof UnauthRoutes]
export type AuthRoute = (typeof AuthRoutes)[keyof typeof AuthRoutes]
