import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          SKAI Worldwide Database Documentation
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl font-text">
          All the RDBMS, Graph-DBMS, tools, and guides you need—one unified hub.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight font-headline">What's New</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ReleaseCard
            title="AgensGraph v2.15.0"
            date="April 30, 2025"
            description="Major release with improved query performance, enhanced graph algorithms, and better PostgreSQL 15 compatibility."
            link="#"
          />
          <ReleaseCard
            title="AgensGraph-Extension Update"
            date="April 15, 2025"
            description="New extension features including advanced path finding algorithms and improved Cypher query support."
            link="#"
          />
          <ReleaseCard
            title="Node.js Driver v3.2.0"
            date="April 5, 2025"
            description="Updated Node.js driver with TypeScript improvements, connection pooling enhancements, and async iterator support."
            link="#"
          />
        </div>
      </div>
    </section>
  )
}

interface ReleaseCardProps {
  title: string
  date: string
  description: string
  link: string
}

function ReleaseCard({ title, date, description, link }: ReleaseCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center text-sm text-muted-foreground font-text">
          <Calendar className="mr-1 h-3 w-3" />
          {date}
        </div>
        <CardTitle className="text-xl font-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm font-text">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="px-0 font-text">
          <Link href={link} className="flex items-center gap-1">
            View Release Notes
            <ExternalLink className="h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
