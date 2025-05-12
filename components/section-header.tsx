interface SectionHeaderProps {
  title: string
  description?: string
  tagline?: string
}

export function SectionHeader({ title, description, tagline }: SectionHeaderProps) {
  return (
    <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight font-headline">{title}</h2>
      {tagline && <p className="mt-1 text-lg text-muted-foreground font-title">{tagline}</p>}
      {description && <p className="mt-2 text-muted-foreground font-text">{description}</p>}
    </div>
  )
}
