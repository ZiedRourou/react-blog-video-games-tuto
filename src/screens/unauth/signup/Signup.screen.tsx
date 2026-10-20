import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignupFormComponent from "@/screens/unauth/signup/SignupForm.component.tsx"
import { Link } from "react-router"
import { UnauthRoutes } from "@/constants/routes.constants.ts"

const SignupScreen = () => (
  <Card>
    <CardHeader>
      <CardTitle>Inscription</CardTitle>
    </CardHeader>
    <CardContent>
      <SignupFormComponent />
    </CardContent>
    <CardFooter className="justify-center gap-1 ">
      <Link
        to={`/${UnauthRoutes.LOGIN}`}
        className="underline underline-offset-4"
      >
        Connexion
      </Link>
    </CardFooter>
  </Card>
)

export default SignupScreen
