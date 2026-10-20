type PostCategoryConfig = {
  name: string
  badgeClassName: string
}

export const POST_CATEGORIES = {
  fps: { name: "FPS", badgeClassName: "bg-red-600 text-white" },
  rpg: { name: "RPG", badgeClassName: "bg-lime-500 text-lime-950" },
  mmo: { name: "MMO", badgeClassName: "bg-blue-600 text-white" },
  esport: { name: "Esport", badgeClassName: "bg-rose-600 text-white" },
  racing: { name: "Course", badgeClassName: "bg-mauve-500 text-white" },
  indie: { name: "Indé", badgeClassName: "bg-yellow-400 text-yellow-950" },
} satisfies Record<string, PostCategoryConfig>

export type PostCategory = keyof typeof POST_CATEGORIES

export const POST_CATEGORY_SLUGS = Object.keys(
  POST_CATEGORIES,
) as PostCategory[]
