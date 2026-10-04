import { Link } from "react-router"
import { UnauthRoutes } from "@/constants/routes.constants"

const LoginScreen = () => (
  <div>
    <h1>Connexion</h1>
    <Link to={`/${UnauthRoutes.SIGNUP}`}>Créer un compte</Link>
  </div>
)

export default LoginScreen
