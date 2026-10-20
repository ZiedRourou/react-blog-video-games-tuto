import * as z from "zod"
import {
  POST_CATEGORY_SLUGS,
  type PostCategory,
} from "@/constants/categories.constants"

export const postCategorySchema = z.enum(POST_CATEGORY_SLUGS)

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  category: postCategorySchema,
  imageUrl: z.string().nullable(),
  author: z
    .object({
      id: z.string(),
      username: z.string(),
      avatarUrl: z.string().nullable(),
    })
    .nullable(),
  likesCount: z.number(),
  likedByMe: z.boolean(),
  commentsCount: z.number(),
  views: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type PostType = z.infer<typeof postSchema>

export const postsResponseSchema = z.object({
  items: z.array(postSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
})

export type PostFilters = {
  category?: PostCategory
  search?: string
}
