import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import LoadingScreen from "@/screens/loading/Loading.screen.tsx"
import { Badge } from "@/components/ui/badge"
import { postDetailQuery } from "@/store/posts"
import { cn } from "cn"
import { POST_CATEGORIES } from "@/constants/categories.constants.ts"
import { EyeIcon } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx"

const PostDetailScreen = () => {
  const { postId } = useParams()
  const { data: post, isPending, isError } = useQuery(postDetailQuery(postId))

  if (isPending) return <LoadingScreen />

  if (isError) return <p>Erreur rafraîchir la page</p>

  return (
    <div className="flex flex-col mx-auto max-w-7xl py-4 gap-8  sm:px-6 px-4">
      <div className="flex items-center gap-2  ">
        <Badge
          className={cn(
            "uppercase",
            POST_CATEGORIES[post.category].badgeClassName,
          )}
        >
          {POST_CATEGORIES[post.category].name}
        </Badge>

        <span className="text-slate-500" aria-hidden="true">
          •
        </span>

        <span>
          {post.createdAt.toLocaleDateString("fr-FR", { dateStyle: "long" })}
        </span>

        <span className="text-slate-500" aria-hidden="true">
          •
        </span>

        <div className="flex items-center gap-2">
          <EyeIcon className="size-3.5" />
          {post.views}
        </div>
      </div>

      <h1 className="text-3xl font-extrabold  text-white lg:text-4xl">
        {post.title}
      </h1>

      {post.author && (
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage
              src={post.author.avatarUrl ?? undefined}
              alt={post.author.username}
            />
          </Avatar>
          <div className="flex flex-col">
            <span>{post.author.username}</span>
            <span className="text-xs ">Auteur</span>
          </div>
        </div>
      )}
      {post.imageUrl && (
        <div className="w-full rounded-lg overflow-hidden ">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="text-slate-300 text-justify">{post.content}</div>
    </div>
  )
}

export default PostDetailScreen
