// src/screens/unauth/login/Login.screen.tsx
import { Link } from "react-router"
import { UnauthRoutes } from "@/constants/routes.constants"
import LoginForm from "./LoginForm.component"

const LoginScreen = () => (
  <div className="flex flex-col border">
    <LoginForm />
    <p className="text-center text-sm">
      Pas de compte ?{" "}
      <Link to={`/${UnauthRoutes.SIGNUP}`}>Créer un compte</Link>
    </p>
  </div>
)

export default LoginScreen
