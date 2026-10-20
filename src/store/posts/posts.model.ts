import * as z from "zod"

export const postCategories = {
  FPS: "fps",
  RPG: "rpg",
  MMO: "mmo",
  ESPORT: "esport",
  RACING: "racing",
  INDIE: "indie",
} as const

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  category: z.enum(postCategories),
  imageUrl: z.string(),
  author: z.object({
    id: z.string(),
    username: z.string(),
    avatarUrl: z.string(),
  }),
  likesCount: z.number(),
  likedByMe: z.boolean(),
  commentsCount: z.number(),
  views: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type PostCategories =
  (typeof postCategories)[keyof typeof postCategories]

export type PostType = z.infer<typeof postSchema>

export const postsResponseSchema = z.object({
  items: z.array(postSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
})

export type PostFilters = {
  category?: PostCategories
  search?: string
}
