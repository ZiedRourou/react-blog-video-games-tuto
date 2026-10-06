import { useQuery } from "@tanstack/react-query"
import { sessionQuery } from "@/store/session/session.query"
import LoadingScreen from "@/screens/loading/Loading.screen"
import AuthScreen from "@/screens/auth/Auth.screen"
import UnauthScreen from "@/screens/unauth/Unauth.screen"

const Screens = () => {
  const { data: user, isPending } = useQuery(sessionQuery)

  if (isPending) return <LoadingScreen />
  return user ? <AuthScreen /> : <UnauthScreen />
}

export default Screens
