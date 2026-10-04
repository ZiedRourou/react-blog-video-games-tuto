import type { StoredUser } from "@/services/auth/types/authTypes.ts"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const USERS_STORAGE_KEY = "mock_users_db"
const TOKEN_STORAGE_KEY = "mock_access_token"

const getStoredUsers = (): StoredUser[] => {
  const data = localStorage.getItem(USERS_STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

const saveUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
}

export class AuthService {
  async register(email: string, username: string, password: string) {
    await delay(2000)

    const users = getStoredUsers()

    if (users.some((u) => u.email === email)) {
      throw new Error("Email déjà pris")
    }

    const user = {
      id: crypto.randomUUID(),
      email,
      username,
      password,
    }

    users.push(user)
    saveUsers(users)

    const accessToken = `mock-token-${user.id}`
    localStorage.setItem(TOKEN_STORAGE_KEY, accessToken)

    return { user: user.username, accessToken }
  }

  async login(email: string, password: string) {
    const users = getStoredUsers()
    const userFound = users.find((user) => user.email === email)

    if (!userFound || userFound.password !== password) {
      throw new Error("Email ou mot de passe incorrect")
    }

    const accessToken = `mock-token-${userFound.id}`
    localStorage.setItem(TOKEN_STORAGE_KEY, accessToken)

    return { user: userFound.username, accessToken }
  }

  async logout() {
    await delay(1000)
    localStorage.removeItem(TOKEN_STORAGE_KEY)
  }
}
