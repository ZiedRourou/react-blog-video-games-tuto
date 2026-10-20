import { Button } from "@/components/ui/button"
import { logout, sessionQuery } from "@/store/session"
import { useQuery } from "@tanstack/react-query"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import CategoriesNavComponent from "@/components/layout/CategoriesNav.component.tsx"

const Header = () => {
  const { data: user } = useQuery(sessionQuery)

  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <span>Blog jeux vidéo</span>
      <CategoriesNavComponent></CategoriesNavComponent>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user?.avatarUrl ?? undefined} alt="avatar" />
        </Avatar>
        <span>{user?.username}</span>
        <Button onClick={logout}>Déconnexion</Button>
      </div>
    </header>
  )
}

export default Header
