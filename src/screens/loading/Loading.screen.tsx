const LoadingScreen = () => (
  <div role="status" className="flex min-h-svh items-center justify-center">
    <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
    <span className="sr-only">load…</span>
  </div>
)

export default LoadingScreen
