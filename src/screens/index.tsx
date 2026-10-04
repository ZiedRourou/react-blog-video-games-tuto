// src/screens/index.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import AuthScreen from "@/screens/auth/Auth.screen"
import UnauthScreen from "@/screens/unauth/Unauth.screen"

const Screens = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <Button onClick={() => setIsAuthenticated((stateBool) => !stateBool)}>
        {isAuthenticated ? "deco" : "connexion"}
      </Button>
      {isAuthenticated ? <AuthScreen /> : <UnauthScreen />}
    </>
  )
}

export default Screens
