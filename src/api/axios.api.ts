import axios, { type AxiosRequestConfig } from "axios"

const TOKEN_KEY = "access_token"

export const tokenStorage = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
}

export type RouteConfig = Omit<AxiosRequestConfig, "paramsSerializer">

const APIAxios = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  headers: { "Content-Type": "application/json" },
})

// Seule différence avec 2iportage : DummyJSON exige le token dans l'en-tête Authorization
APIAxios.interceptors.request.use((config) => {
  const token = tokenStorage.get()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const APIRoutes = {
  /* AUTH */
  POSTLogin: (): RouteConfig => ({ method: "POST", url: "/auth/login" }),
  GETCurrentUser: (): RouteConfig => ({ method: "GET", url: "/auth/me" }),
  /* ---- */
}

export default APIAxios
