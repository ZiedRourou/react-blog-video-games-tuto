import { queryOptions } from "@tanstack/react-query"
import { getMe } from "@/store/session/session.service"
import { sessionKey } from "@/store/session/session.store"

export const sessionQuery = queryOptions({
  queryKey: sessionKey,
  queryFn: getMe,
  staleTime: Infinity,
  retry: false,
})
