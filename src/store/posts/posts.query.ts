import { queryOptions } from "@tanstack/react-query"
import { getPostById, getPosts } from "@/store/posts/posts.service.ts"
import type { PostFilters } from "@/store/posts/posts.model.ts"

export const postsQuery = (postFilters: PostFilters) =>
  queryOptions({
    queryKey: ["posts", postFilters],
    queryFn: () => getPosts(postFilters),
    staleTime: 0,
    retry: 3,
  })

export const postDetailQuery = (id: string) =>
  queryOptions({
    queryKey: ["detail", id],
    queryFn: () => getPostById(id),
    retry: false,
  })
