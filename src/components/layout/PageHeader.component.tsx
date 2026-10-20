type PageHeaderProps = {
  title: string
  description?: string
}

const PageHeaderComponent = ({ title, description }: PageHeaderProps) => (
  <header className="flex flex-col gap-6">
    <div className="flex max-w-2xl flex-col gap-3">
      <h1 className="text-3xl font-bold ">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  </header>
)

export default PageHeaderComponent
