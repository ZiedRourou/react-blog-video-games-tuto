import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignupFormComponent from "@/screens/unauth/signup/SignupForm.component.tsx"

const SignupScreen = () => (
  <Card>
    <CardHeader>
      <CardTitle>Connexion</CardTitle>
      <CardDescription>Inscris toi à ton compte.</CardDescription>
    </CardHeader>
    <CardContent>
      <SignupFormComponent />
    </CardContent>
  </Card>
)

export default SignupScreen
