import { EyeIcon, HeartIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { PostType } from "@/store/posts"
import { Link } from "react-router"
import { AuthRoutes } from "@/constants/routes.constants"
import { cn } from "cn"
import { POST_CATEGORIES } from "@/constants/categories.constants.ts"

type PostCardProps = {
  post: PostType
}

const PostCardComponent = ({ post }: PostCardProps) => (
  <Card className="relative gap-0 py-0 sm:flex-row">
    <div className="relative sm:w-2/5">
      <img src={post.imageUrl} alt="" className="size-full object-cover " />
      <Badge
        className={cn(
          "absolute top-2 left-2 uppercase",
          POST_CATEGORIES[post.category].badgeClassName,
        )}
      >
        {POST_CATEGORIES[post.category].name}
      </Badge>
    </div>

    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="text-lg font-bold">
        <Link
          to={`/${AuthRoutes.POSTS}/${post.id}`}
          className=" hover:underline"
        >
          {post.title}
        </Link>
      </div>

      <p className="text-muted-foreground line-clamp-5">{post.excerpt}</p>
      <div className="flex gap-3 text-xs text-muted-foreground ">
        <div className="flex flex-row gap-2">
          <EyeIcon className="size-3.5" />
          {post.views} vues
        </div>
        <div className="flex flex-row gap-2">
          <HeartIcon className="size-3.5" />
          {post.likesCount} j'aime
        </div>
      </div>
    </div>
  </Card>
)

export default PostCardComponent
