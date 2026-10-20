import {
  keepPreviousData,
  queryOptions,
  skipToken,
} from "@tanstack/react-query"
import { getPostById, getPosts } from "@/store/posts/posts.service.ts"
import type { PostFilters } from "@/store/posts/posts.model.ts"

export const postsQuery = (postFilters: PostFilters) =>
  queryOptions({
    queryKey: ["posts", "list", postFilters],
    queryFn: () => getPosts(postFilters),
    placeholderData: keepPreviousData,
    staleTime: 0,
    retry: false,
  })

export const postDetailQuery = (id: string | undefined) =>
  queryOptions({
    queryKey: ["posts", "detail", id],
    queryFn: id ? () => getPostById(id) : skipToken,
    retry: false,
  })
