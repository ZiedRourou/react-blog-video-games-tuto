import { Outlet } from "react-router"

const AuthLayoutComponent = () => (
  <>
    <div className="flex min-h-svh items-center justify-center p-6">
      <header>blog </header>
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  </>
)

export default AuthLayoutComponent
