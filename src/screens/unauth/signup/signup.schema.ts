import * as z from "zod"
import isStrongPassword from "validator/lib/isStrongPassword"

export const signupSchema = z
  .object({
    username: z.string().min(1, "Nom d'utilisateur requis"),
    email: z.email("Adresse email invalide"),
    password: z.string().refine((value) => isStrongPassword(value), {
      error: "mdp trop faible ",
    }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    error: "confirmer le bon mdp",
    path: ["passwordConfirm"],
  })

export type SignupValues = z.infer<typeof signupSchema>
