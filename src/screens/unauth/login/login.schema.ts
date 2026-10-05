import * as z from "zod"

export const loginSchema = z.object({
  username: z.string().min(1, "Nom  requis"),
  password: z.string().min(1, "mdp requis"),
})

export type LoginValues = z.infer<typeof loginSchema>
