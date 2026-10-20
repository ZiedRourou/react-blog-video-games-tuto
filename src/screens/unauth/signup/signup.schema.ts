import * as z from "zod"
import isStrongPassword from "validator/lib/isStrongPassword"

const PASSWORD_RULES =
  "8 caractères minimum, dont 1 majuscule, 1 minuscule, 1 chiffre et 1 symbole"

export const signupSchema = z
  .object({
    username: z.string().min(1, "Nom d'utilisateur requis"),
    email: z.email("Adresse email invalide"),
    firstName: z.string().min(1, "prenom d'utilisateur requis"),
    lastName: z.string().min(1, "nom d'utilisateur requis"),
    password: z.string().refine((value) => isStrongPassword(value), {
      error: PASSWORD_RULES,
    }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    error: "confirmer le bon mdp",
    path: ["passwordConfirm"],
  })

export type SignupValues = z.infer<typeof signupSchema>
