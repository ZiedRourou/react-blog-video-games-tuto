import { useQuery } from "@tanstack/react-query"
import { sessionQuery } from "@/store/session/session.query"

const HomeScreen = () => {
  const { data: user } = useQuery(sessionQuery)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Bonjour {user?.firstName}</h1>
      <pre className="rounded-lg bg-muted p-4 text-xs">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export default HomeScreen
