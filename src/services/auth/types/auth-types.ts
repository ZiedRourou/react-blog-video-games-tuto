export type User = {
  id: string
  email: string
  username: string
}

export type StoredUser = User & {
  password: string
}

export type AuthResponse = {
  user: User
  accessToken: string
}

export type AuthContextType = {
  user: string | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}
