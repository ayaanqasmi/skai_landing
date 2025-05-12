import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  links: {
    overview: string
    quickStart: string
    reference: string
    releaseNotes: string
    github: string
  }
  featured?: boolean
}

export function ProductCard({ icon: Icon, title, tagline, description, links, featured = false }: ProductCardProps) {
  return (
    <Card className={`h-full ${featured ? "border-primary/50 bg-primary/5" : ""}`}>
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className={`rounded-md p-2 ${featured ? "bg-primary/20" : "bg-primary/10"}`}>
            <Icon className={`h-6 w-6 ${featured ? "text-primary" : "text-primary"}`} />
          </div>
          <div>
            <CardTitle className="text-xl font-title">{title}</CardTitle>
            <CardDescription className="mt-1 font-text">{tagline}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground font-text">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t p-4">
        <Button variant="outline" size="sm" className="font-text" asChild>
          <Link href={links.overview}>Overview</Link>
        </Button>
        <Button variant="outline" size="sm" className="font-text" asChild>
          <Link href={links.quickStart}>Quick-Start</Link>
        </Button>
        <Button variant="outline" size="sm" className="font-text"  asChild>
          <Link href={links.reference}>Reference</Link>
        </Button>
        <Button variant="outline" size="sm" className="font-text"  asChild>
          <Link href={links.releaseNotes}>Release Notes</Link>
        </Button>
        <Button variant="outline" size="sm" className="font-text" asChild>
          <Link href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
