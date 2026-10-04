import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "@/contexts/AuthProvider.tsx"
import { ProtectedRoute } from "@/components/guards/ProtectedRoute.tsx"
import { Login } from "@/screens/auth/login.tsx"
import { Dashboard } from "@/screens/blog/home.tsx"
import { Register } from "@/screens/auth/register.tsx"
import { AuthenticatedRoute } from "@/components/guards/AuhenticatedRoute.tsx"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={
                <AuthenticatedRoute>
                  <Login />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/register"
              element={
                <AuthenticatedRoute>
                  <Register />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
