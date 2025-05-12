"use client"
import { Database, GitBranch, Globe, Server, Share2 } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { SectionHeader } from "@/components/section-header"
import { Cpu, Shield, Activity, Puzzle, LinkIcon, GitMerge, MoveRight, Layers, ArrowRight } from "lucide-react"
import { ProductCategory } from "@/components/product-category"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProductFamilies() {
  return (
    <div className="space-y-16">
      <section id="rdbms-family" className="scroll-mt-20">
        <SectionHeader
          title="RDBMS Family"
          description="Our comprehensive PostgreSQL-based database solutions and tools"
        />

        {/* Featured Product - EDB Postgres AI */}
        <div className="mb-8">
          <ProductCard
            icon={Cpu}
            title="EDB Postgres AI"
            tagline="AI-powered PostgreSQL database platform"
            description="Enhance your PostgreSQL databases with AI capabilities for intelligent query optimization, automated management, and advanced analytics."
            links={{
              overview: "/docs/postgres-ai/overview",
              quickStart: "/docs/postgres-ai/quick-start",
              reference: "/docs/postgres-ai/reference",
              releaseNotes: "/docs/postgres-ai/release-notes",
              github: "https://github.com/skaiworldwide-oss/postgres-ai",
            }}
            featured={true}
          />
        </div>

        {/* Product Categories */}
        <div className="space-y-8">
          {/* Core Database Products */}
          <ProductCategory
            title="Core Database Products"
            description="Enterprise-ready PostgreSQL database solutions"
            products={[
              {
                icon: Database,
                title: "EDB Postgres Advanced Server",
                description: "Enterprise-class PostgreSQL database with Oracle compatibility",
                links: {
                  overview: "/docs/postgres-advanced-server/overview",
                  quickStart: "/docs/postgres-advanced-server/quick-start",
                  reference: "/docs/postgres-advanced-server/reference",
                  releaseNotes: "/docs/postgres-advanced-server/release-notes",
                  github: "#",
                },
              },
              {
                icon: Database,
                title: "EDB Postgres Extended Server",
                description: "Extended PostgreSQL with additional enterprise features",
                links: {
                  overview: "/docs/postgres-extended-server/overview",
                  quickStart: "/docs/postgres-extended-server/quick-start",
                  reference: "/docs/postgres-extended-server/reference",
                  releaseNotes: "/docs/postgres-extended-server/release-notes",
                  github: "#",
                },
              },
              {
                icon: Database,
                title: "EDB Postgres Distributed (PGD)",
                description: "Distributed PostgreSQL for high availability and scalability",
                links: {
                  overview: "/docs/postgres-distributed/overview",
                  quickStart: "/docs/postgres-distributed/quick-start",
                  reference: "/docs/postgres-distributed/reference",
                  releaseNotes: "/docs/postgres-distributed/release-notes",
                  github: "#",
                },
              },
            ]}
          />
          
          {/* Platforms and Tools */}
          <ProductCategory
            title="Platforms and Tools"
            description="Kubernetes, management, monitoring, and security tools"
            products={[
              {
                icon: Server,
                title: "Kubernetes Solutions",
                description: "Deploy and manage PostgreSQL on Kubernetes with CloudNativePG",
                links: {
                  overview: "/docs/kubernetes/overview",
                  quickStart: "/docs/kubernetes/quick-start",
                  reference: "/docs/kubernetes/reference",
                  releaseNotes: "/docs/kubernetes/release-notes",
                  github: "#",
                },
              },
              {
                icon: Shield,
                title: "Security Tools",
                description: "Transparent Data Encryption, LDAP Sync, and more",
                links: {
                  overview: "/docs/security/overview",
                  quickStart: "/docs/security/quick-start",
                  reference: "/docs/security/reference",
                  releaseNotes: "/docs/security/release-notes",
                  github: "#",
                },
              },
              {
                icon: Activity,
                title: "High Availability",
                description: "Replication, failover, and distributed solutions",
                links: {
                  overview: "/docs/high-availability/overview",
                  quickStart: "/docs/high-availability/quick-start",
                  reference: "/docs/high-availability/reference",
                  releaseNotes: "/docs/high-availability/release-notes",
                  github: "#",
                },
              },
            ]}
          />

          {/* Extensions and Connectors */}
          <ProductCategory
            title="Extensions and Connectors"
            description="Database extensions, connectors, and foreign data wrappers"
            products={[
              {
                icon: Puzzle,
                title: "Database Extensions",
                description: "PostGIS, pgvector, Advanced Storage Pack, and more",
                links: {
                  overview: "/docs/extensions/overview",
                  quickStart: "/docs/extensions/quick-start",
                  reference: "/docs/extensions/reference",
                  releaseNotes: "/docs/extensions/release-notes",
                  github: "#",
                },
              },
              {
                icon: LinkIcon,
                title: "Connectors",
                description: "JDBC, ODBC, .NET, and OCL connectors",
                links: {
                  overview: "/docs/connectors/overview",
                  quickStart: "/docs/connectors/quick-start",
                  reference: "/docs/connectors/reference",
                  releaseNotes: "/docs/connectors/release-notes",
                  github: "#",
                },
              },
              {
                icon: GitMerge,
                title: "Foreign Data Wrappers",
                description: "Hadoop, Mongo, and MySQL foreign data wrappers",
                links: {
                  overview: "/docs/fdw/overview",
                  quickStart: "/docs/fdw/quick-start",
                  reference: "/docs/fdw/reference",
                  releaseNotes: "/docs/fdw/release-notes",
                  github: "#",
                },
              },
            ]}
          />

          {/* Migration and Integration */}
          <ProductCategory
            title="Migration and Integration"
            description="Tools for migration and third-party integrations"
            products={[
              {
                icon: MoveRight,
                title: "Migration Tools",
                description: "Migration Toolkit, Oracle Migration Handbook, and Replication Server",
                links: {
                  overview: "/docs/migration/overview",
                  quickStart: "/docs/migration/quick-start",
                  reference: "/docs/migration/reference",
                  releaseNotes: "/docs/migration/release-notes",
                  github: "#",
                },
              },
              {
                icon: Layers,
                title: "Third-Party Integrations",
                description: "Backup, security, data movement, and developer tools",
                links: {
                  overview: "/docs/integrations/overview",
                  quickStart: "/docs/integrations/quick-start",
                  reference: "/docs/integrations/reference",
                  releaseNotes: "/docs/integrations/release-notes",
                  github: "#",
                },
              },
            ]}
          />
        </div>

        {/* Product Explorer */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Product Explorer</CardTitle>
              <CardDescription>Browse our complete catalog of RDBMS products and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gdbms-family" className="scroll-mt-20">
        <SectionHeader title="GDBMS Family" tagline="Graph database management systems and visualization tools" />
        <div className="grid gap-6 md:grid-cols-2">
          <ProductCard
            icon={GitBranch}
            title="AgensGraph"
            tagline="Multi-model Graph-DBMS built on PostgreSQL"
            description="Leverage ACID transactions on graph and relational data in a single engine with Cypher and SQL query languages."
            links={{
              overview: "/docs/agensgraph/overview",
              quickStart: "/docs/agensgraph/quick-start",
              reference: "/docs/agensgraph/reference",
              releaseNotes: "/docs/agensgraph/release-notes",
              github: "https://github.com/skaiworldwide-oss/agensgraph",
            }}
          />
          <ProductCard
            icon={Globe}
            title="Apache AGE Extension"
            tagline="PostgreSQL extension for graph data"
            description="Add graph database functionality to existing PostgreSQL databases with this Apache incubator project."
            links={{
              overview: "/docs/apache-age/overview",
              quickStart: "/docs/apache-age/quick-start",
              reference: "/docs/apache-age/reference",
              releaseNotes: "/docs/apache-age/release-notes",
              github: "https://github.com/skaiworldwide-oss/AgensGraph-Extension",
            }}
          />
          <ProductCard
            icon={Share2}
            title="Visualization UIs"
            tagline="Graph data visualization and exploration tools"
            description="AGViewer and AGExplorer provide intuitive interfaces for visualizing, querying, and exploring graph data stored in AgensGraph."
            links={{
              overview: "/docs/visualization/overview",
              quickStart: "/docs/visualization/quick-start",
              reference: "/docs/visualization/reference",
              releaseNotes: "/docs/visualization/release-notes",
              github: "https://github.com/skaiworldwide-oss/AGViewer",
            }}
          />
        </div>
      </section>
    </div>
  )
}
