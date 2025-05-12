import type React from "react"
import { BookOpen, Code, HardDrive, Shield, Database, Puzzle, Activity, GitMerge, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"

export function DeveloperGuides() {
  return (
    <section id="developer-guides" className="py-16 scroll-mt-20">
      <SectionHeader
        title="Developer & Operator Guides"
        description="Comprehensive guides for developers and operators"
      />

      <ProductCategory
        title="Developer Resources"
        description="Guides and resources for application developers"
        products={[
          {
            icon: Code,
            title: "Getting Started",
            description: "Installation, configuration, and basic usage guides",
            links: {
              overview: "/docs/guides/getting-started/overview",
              quickStart: "/docs/guides/getting-started/quick-start",
              reference: "/docs/guides/getting-started/reference",
              releaseNotes: "/docs/guides/getting-started/release-notes",
              github: "#",
            },
          },
          {
            icon: Database,
            title: "Database Development",
            description: "Working with PostgreSQL and AgensGraph databases",
            links: {
              overview: "/docs/guides/database-development/overview",
              quickStart: "/docs/guides/database-development/quick-start",
              reference: "/docs/guides/database-development/reference",
              releaseNotes: "/docs/guides/database-development/release-notes",
              github: "#",
            },
          },
          {
            icon: Puzzle,
            title: "Extensions Development",
            description: "Creating and using PostgreSQL extensions",
            links: {
              overview: "/docs/guides/extensions/overview",
              quickStart: "/docs/guides/extensions/quick-start",
              reference: "/docs/guides/extensions/reference",
              releaseNotes: "/docs/guides/extensions/release-notes",
              github: "#",
            },
          },
        ]}
      />

      <div className="mt-8">
        <ProductCategory
          title="Operations"
          description="Guides for database administrators and operators"
          products={[
            {
              icon: HardDrive,
              title: "Deployment",
              description: "Production deployment, Kubernetes, and Docker guides",
              links: {
                overview: "/docs/guides/deployment/overview",
                quickStart: "/docs/guides/deployment/quick-start",
                reference: "/docs/guides/deployment/reference",
                releaseNotes: "/docs/guides/deployment/release-notes",
                github: "#",
              },
            },
            {
              icon: Activity,
              title: "High Availability",
              description: "Setting up and managing high availability clusters",
              links: {
                overview: "/docs/guides/high-availability/overview",
                quickStart: "/docs/guides/high-availability/quick-start",
                reference: "/docs/guides/high-availability/reference",
                releaseNotes: "/docs/guides/high-availability/release-notes",
                github: "#",
              },
            },
            {
              icon: Shield,
              title: "Security",
              description: "Security best practices, encryption, and access control",
              links: {
                overview: "/docs/guides/security/overview",
                quickStart: "/docs/guides/security/quick-start",
                reference: "/docs/guides/security/reference",
                releaseNotes: "/docs/guides/security/release-notes",
                github: "#",
              },
            },
          ]}
        />
      </div>

      <div className="mt-8">
        <ProductCategory
          title="Advanced Topics"
          description="In-depth guides for advanced users"
          products={[
            {
              icon: BookOpen,
              title: "Performance Tuning",
              description: "Query optimization, indexing, and performance monitoring",
              links: {
                overview: "/docs/guides/performance/overview",
                quickStart: "/docs/guides/performance/quick-start",
                reference: "/docs/guides/performance/reference",
                releaseNotes: "/docs/guides/performance/release-notes",
                github: "#",
              },
            },
            {
              icon: GitMerge,
              title: "Migration",
              description: "Migrating from other database systems to PostgreSQL",
              links: {
                overview: "/docs/guides/migration/overview",
                quickStart: "/docs/guides/migration/quick-start",
                reference: "/docs/guides/migration/reference",
                releaseNotes: "/docs/guides/migration/release-notes",
                github: "#",
              },
            },
            {
              icon: Cpu,
              title: "AI Integration",
              description: "Integrating AI capabilities with PostgreSQL databases",
              links: {
                overview: "/docs/guides/ai-integration/overview",
                quickStart: "/docs/guides/ai-integration/quick-start",
                reference: "/docs/guides/ai-integration/reference",
                releaseNotes: "/docs/guides/ai-integration/release-notes",
                github: "#",
              },
            },
          ]}
        />
      </div>
    </section>
  )
}

interface GuideCardProps {
  icon: React.ElementType
  title: string
  description: string
  links: Array<{ label: string; href: string }>
}

function GuideCard({ icon: Icon, title, description, links }: GuideCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="rounded-md bg-primary/10 p-2">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Button variant="link" asChild className="h-auto p-0 text-sm">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

interface ProductCategoryProps {
  title: string
  description: string
  products: Array<{
    icon: React.ElementType
    title: string
    description: string
    links: {
      overview: string
      quickStart: string
      reference: string
      releaseNotes: string
      github: string
    }
  }>
}

function ProductCategory({ title, description, products }: ProductCategoryProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="grid gap-6 mt-4 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

interface ProductCardProps {
  icon: React.ElementType
  title: string
  description: string
  links: {
    overview: string
    quickStart: string
    reference: string
    releaseNotes: string
    github: string
  }
}

function ProductCard({ icon: Icon, title, description, links }: ProductCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="rounded-md bg-primary/10 p-2">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>
            <Button variant="link" asChild className="h-auto p-0 text-sm">
              <Link href={links.overview}>Overview</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild className="h-auto p-0 text-sm">
              <Link href={links.quickStart}>Quick Start</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild className="h-auto p-0 text-sm">
              <Link href={links.reference}>Reference</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild className="h-auto p-0 text-sm">
              <Link href={links.releaseNotes}>Release Notes</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild className="h-auto p-0 text-sm">
              <Link href={links.github}>GitHub</Link>
            </Button>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
