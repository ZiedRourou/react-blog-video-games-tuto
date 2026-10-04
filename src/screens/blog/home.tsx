import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext.tsx"

export function Dashboard() {
  const { logout } = useAuth()

  return (
    <div>
      <Button variant="outline" onClick={() => logout()}>
        Se déconnecter
      </Button>
    </div>
  )
}
