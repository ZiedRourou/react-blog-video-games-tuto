import { isAxiosError } from "axios"
import APIAxios, { APIRoutes, tokenStorage } from "@/api/axios.api"
import {
  loginResponseSchema,
  userSchema,
  type User,
} from "@/store/session/session.model"

type Credentials = { username: string; password: string }

export async function login(credentials: Credentials): Promise<User> {
  const { data } = await APIAxios({
    ...APIRoutes.POSTLogin(),
    data: credentials,
  })
  const session = loginResponseSchema.parse(data)
  tokenStorage.set(session.accessToken)
  return userSchema.parse(session)
}

export async function getMe(): Promise<User | null> {
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
