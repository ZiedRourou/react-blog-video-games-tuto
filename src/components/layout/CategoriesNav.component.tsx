import { NavLink } from "react-router"
import { AuthRoutes } from "@/constants/routes.constants"
import { POST_CATEGORIES } from "@/constants/categories.constants"

const LINKS = [
  {
    to: `/${AuthRoutes.HOME}`,
    label: "Tous",
  },
  ...Object.entries(POST_CATEGORIES).map(([slug, { name }]) => ({
    to: `/${AuthRoutes.CATEGORIES}/${slug}`,
    label: name,
  })),
]

const CategoriesNavComponent = () => (
  <nav className="flex gap-6">
    {LINKS.map(({ to, label }) => (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white"
        }
      >
        {label}
      </NavLink>
    ))}
  </nav>
)

export default CategoriesNavComponent
