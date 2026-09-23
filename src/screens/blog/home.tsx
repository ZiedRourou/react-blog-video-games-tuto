import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"

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
