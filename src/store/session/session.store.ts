import { queryClient } from "@/store/queryClient"
import type { User } from "@/store/session/session.model"

export const sessionKey = ["session"]

export const sessionStore = {
  setUser: (user: User | null) =>
    queryClient.setQueryData<User | null>(sessionKey, user),
}
