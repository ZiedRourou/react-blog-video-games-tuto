import { isAxiosError } from "axios"
import * as z from "zod"

const errorBodySchema = z.object({ message: z.string() })

export const getErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    const body = errorBodySchema.safeParse(error.response?.data)
    if (body.success) return body.data.message
  }
  return error instanceof Error ? error.message : "Erreur inconnue"
}
