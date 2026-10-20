import * as z from "zod"

const roleEnum = {
  ADMIN: "ADMIN",
  AUTHOR: "AUTHOR",
  READER: "READER",
} as const

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.email(),
  firstName: z.string(),
  lastName: z.string(),
  avatarUrl: z.string().nullable(),
  role: z.enum(roleEnum),
  createdAt: z.string(),
})

export type User = z.infer<typeof userSchema>

export const authResponseSchema = z.object({
  user: userSchema,
  accessToken: z.string(),
})

export type LoginPayload = {
  username: string
  password: string
}

export type SignupPayload = {
  username: string
  password: string
  email: string
  firstName: string
  lastName: string
}
