import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/store/queryClient"
import Screens from "@/screens"
import { Toaster } from "@/components/ui/sonner"

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Screens />
      <Toaster theme="dark" />
    </QueryClientProvider>
  )
}
