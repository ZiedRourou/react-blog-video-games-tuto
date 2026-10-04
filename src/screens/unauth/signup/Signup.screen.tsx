import { Link } from "react-router"
import { UnauthRoutes } from "@/constants/routes.constants.ts"

const SignupScreen = () => (
  <div>
    <h1>Inscription</h1>
    <Link to={`/${UnauthRoutes.LOGIN}`}>Connexion</Link>
  </div>
)

export default SignupScreen
