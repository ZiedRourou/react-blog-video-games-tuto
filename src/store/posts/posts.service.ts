import APIAxios, { APIRoutes } from "@/api/axios.api.ts"
import {
  type PostFilters,
  postSchema,
  postsResponseSchema,
} from "@/store/posts/posts.model.ts"

export async function getPosts(postFilters: PostFilters) {
  const { data } = await APIAxios(APIRoutes.GETBlogPosts(postFilters))
  return postsResponseSchema.parse(data)
}

export async function getPostById(id: string) {
  const { data } = await APIAxios(APIRoutes.GETPostDetails(id))
  return postSchema.parse(data)
}
