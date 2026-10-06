import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/store/queryClient"
import Screens from "@/screens"

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Screens />
    </QueryClientProvider>
  )
}
