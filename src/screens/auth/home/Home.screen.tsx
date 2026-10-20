import { useQuery } from "@tanstack/react-query"
import PageHeaderComponent from "@/components/layout/PageHeader.component"
import PostCardComponent from "@/screens/auth/home/components/PostCard.component"
import { postsQuery } from "@/store/posts"
import type { PostCategories } from "@/store/posts/posts.model"
import { POST_CATEGORIES } from "@/constants/categories.constants"
import { useParams } from "react-router"
import LoadingScreen from "@/screens/loading/Loading.screen.tsx"
import { Card } from "@/components/ui/card"
import { BadgeCheck, Gamepad2, UserRoundGroup } from "lucide-react"

const HomeScreen = () => {
  const { category } = useParams()
  const categoryParam = category as PostCategories | undefined

  const { data, isPending, isError } = useQuery(
    postsQuery({ category: categoryParam }),
  )

  const title = categoryParam
    ? `Articles ${POST_CATEGORIES[categoryParam].name}`
    : "Derniers articles gaming"

  if (isPending) return <LoadingScreen />

  if (isError) return <p>Erreur rafraîchir la page.</p>

  return (
    <div className="mx-auto flex flex-col max-w-3/4 py-6 gap-8 px-2 sm:px-6">
      <PageHeaderComponent
        title={title}
        description="Analyses impartiales, guides stratégiques et décryptages de l'industrie vidéoludique. Pas de jargon inutile, juste la passion du jeu."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-6">
          {data.items.map((post) => (
            <PostCardComponent post={post} key={post.id} />
          ))}
        </div>

        <div className="flex flex-col ">
          <Card className="flex flex-col px-4">
            <div className="flex items-center gap-2">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-400 ">
                <Gamepad2 className="size-7" />
              </div>{" "}
              <h2 className="font-semibold">À propos du blog</h2>
            </div>

            <div>
              Bienvenue sur PixelZone ! Un carnet de bord 100% indépendant animé
              par trois passionnés de la première heure. Ici, on partage nos
              coups de cœur, nos coups de gueule et nos guides sans sponsorings
              occultes.
            </div>
            <div className="flex flex-row gap-2">
              <BadgeCheck className="text-primary"></BadgeCheck>
              <div> 100% indépendant </div>
              <UserRoundGroup className="text-primary"></UserRoundGroup>
              <div> 3 Rédacteurs</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
