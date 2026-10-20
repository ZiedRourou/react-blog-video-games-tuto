import { Outlet } from "react-router"
import Header from "@/components/layout/Header.component"

const AuthLayoutComponent = () => {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
export default AuthLayoutComponent
