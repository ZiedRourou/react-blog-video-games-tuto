import axios, { isAxiosError } from "axios"
import * as z from "zod"

const TOKEN_KEY = "access_token"

export const tokenStorage = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
}

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  headers: { "Content-Type": "application/json" },
})

// Avant chaque requête : ajouter le token s'il existe
api.interceptors.request.use((config) => {
  const token = tokenStorage.get()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

const errorBodySchema = z.object({ message: z.string() })

// Après chaque réponse en erreur : une ApiError avec le message du serveur
api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (isAxiosError(error) && error.response) {
      const body = errorBodySchema.safeParse(error.response.data)
      const message = body.success
        ? body.data.message
        : `Erreur ${error.response.status}`
      return Promise.reject(new ApiError(message, error.response.status))
    }
    return Promise.reject(error)
  },
)
