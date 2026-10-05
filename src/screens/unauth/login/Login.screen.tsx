import { Link } from "react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UnauthRoutes } from "@/constants/routes.constants"
import LoginForm from "./LoginForm.component"

const LoginScreen = () => (
  <Card>
    <CardHeader>
      <CardTitle>Connexion</CardTitle>
      <CardDescription>Connecte-toi à ton compte.</CardDescription>
    </CardHeader>
    <CardContent>
      <LoginForm />
    </CardContent>
    <CardFooter className="justify-center gap-1 text-sm">
      Pas de compte ?
      <Link
        to={`/${UnauthRoutes.SIGNUP}`}
        className="font-medium underline underline-offset-4"
      >
        Créer un compte
      </Link>
    </CardFooter>
  </Card>
)

export default LoginScreen
