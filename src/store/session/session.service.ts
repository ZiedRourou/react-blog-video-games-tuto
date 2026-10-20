import { isAxiosError } from "axios"
import APIAxios, { APIRoutes } from "@/api/axios.api"
import { tokenStorage } from "@/utils/token.utils"
import {
  userSchema,
  type SignupPayload,
  type LoginPayload,
  authResponseSchema,
} from "@/store/session/session.model"
import { sessionStore } from "@/store/session/session.store.ts"

export async function login(loginPayload: LoginPayload) {
  const { data } = await APIAxios({
    ...APIRoutes.POSTLogin(),
    data: loginPayload,
  })
  const session = authResponseSchema.parse(data)
  tokenStorage.set(session.accessToken)
  return session.user
}

export async function getMe() {
  if (!tokenStorage.get()) return null
  try {
    const { data } = await APIAxios(APIRoutes.GETCurrentUser())
    return userSchema.parse(data)
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      tokenStorage.clear()
      return null
    }

    throw error
  }
}

export async function signup({
  username,
  email,
  password,
  firstName,
  lastName,
}: SignupPayload) {
  const { data } = await APIAxios({
    ...APIRoutes.POSTSignup(),
    data: { username, email, password, firstName, lastName },
  })
  const session = authResponseSchema.parse(data)
  tokenStorage.set(session.accessToken)
  return session.user
}

export function logout() {
  tokenStorage.clear()
  sessionStore.setUser(null)
}
