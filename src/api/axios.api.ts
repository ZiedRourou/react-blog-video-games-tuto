import axios, { type AxiosRequestConfig } from "axios"
import { tokenStorage } from "@/utils/token.utils"
import type { PostFilters } from "@/store/posts"

export type RouteConfig = Omit<AxiosRequestConfig, "paramsSerializer">

const APIAxios = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  headers: { "Content-Type": "application/json" },
})

APIAxios.interceptors.request.use((config) => {
  const token = tokenStorage.get()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

APIAxios.interceptors.response.use()

export const APIRoutes = {
  POSTLogin: (): RouteConfig => ({ method: "POST", url: "/auth/login" }),
  GETCurrentUser: (): RouteConfig => ({ method: "GET", url: "/auth/me" }),
  POSTSignup: (): RouteConfig => ({ method: "POST", url: "/auth/register" }),
  GETBlogPosts: (postFilters: PostFilters): RouteConfig => ({
    method: "GET",
    url: "/articles",
    params: postFilters,
  }),
  GETPostDetails: (id: string): RouteConfig => ({
    method: "GET",
    url: `/articles/${id}`,
  }),
}

export default APIAxios
