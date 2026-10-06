import { queryOptions } from "@tanstack/react-query"
import { getMe } from "@/store/session/session.service"

export const sessionQuery = queryOptions({
  queryKey: ["session", "me"],
  queryFn: getMe,
  staleTime: Infinity,
  retry: false,
})
