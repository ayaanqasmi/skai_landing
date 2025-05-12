import { BarChart, Boxes, Cpu, Database, LineChart, RefreshCw, Search, Share2, Zap } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { SectionHeader } from "@/components/section-header"

interface Product {
  icon: any
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

interface ProductCategoryProps {
  title: string
  description: string
  products: Product[]
}

function ProductCategoryComponent({ title, description, products }: ProductCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="grid gap-6 mt-4 md:grid-cols-2">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            icon={product.icon}
            title={product.title}
            tagline={product.description}
            description={product.description}
            links={product.links}
          />
        ))}
      </div>
    </div>
  )
}

export function EcosystemTools() {
  return (
    <section id="ecosystem-tools" className="py-16 scroll-mt-20">
      <SectionHeader
        title="Ecosystem Tools & Extensions"
        description="Enhance your database experience with these powerful tools and extensions"
      />

      <ProductCategoryComponent
        title="AI and Analytics"
        description="Tools for AI integration, vector search, and analytics"
        products={[
          {
            icon: Cpu,
            title: "PGVector Integration",
            description: "Vector similarity search for PostgreSQL and AgensGraph databases",
            links: {
              overview: "/docs/pgvector/overview",
              quickStart: "/docs/pgvector/quick-start",
              reference: "/docs/pgvector/reference",
              releaseNotes: "/docs/pgvector/release-notes",
              github: "https://github.com/skaiworldwide-oss/pgvector",
            },
          },
          {
            icon: BarChart,
            title: "Lakehouse Analytics",
            description: "Data lake integration and analytics for PostgreSQL",
            links: {
              overview: "/docs/lakehouse/overview",
              quickStart: "/docs/lakehouse/quick-start",
              reference: "/docs/lakehouse/reference",
              releaseNotes: "/docs/release-notes",
              github: "#",
            },
          },
          {
            icon: Zap,
            title: "AI Accelerator",
            description: "Performance optimization for AI workloads on PostgreSQL",
            links: {
              overview: "/docs/ai-accelerator/overview",
              quickStart: "/docs/ai-accelerator/quick-start",
              reference: "/docs/ai-accelerator/reference",
              releaseNotes: "/docs/ai-accelerator/release-notes",
              github: "#",
            },
          },
        ]}
      />

      <div className="mt-8">
        <ProductCategoryComponent
          title="Query and Performance Tools"
          description="Tools for query optimization and performance monitoring"
          products={[
            {
              icon: Database,
              title: "Octopus Query Interface",
              description: "Advanced query interface with visualization for SQL and Cypher",
              links: {
                overview: "/docs/octopus/overview",
                quickStart: "/docs/octopus/quick-start",
                reference: "/docs/octopus/reference",
                releaseNotes: "/docs/octopus/release-notes",
                github: "https://github.com/skaiworldwide-oss/Octopus",
              },
            },
            {
              icon: LineChart,
              title: "Performance Monitoring",
              description: "Tools for monitoring and optimizing database performance",
              links: {
                overview: "/docs/performance/overview",
                quickStart: "/docs/performance/quick-start",
                reference: "/docs/performance/reference",
                releaseNotes: "/docs/performance/release-notes",
                github: "#",
              },
            },
            {
              icon: Search,
              title: "Query Advisor",
              description: "Intelligent query optimization and recommendations",
              links: {
                overview: "/docs/query-advisor/overview",
                quickStart: "/docs/query-advisor/quick-start",
                reference: "/docs/query-advisor/reference",
                releaseNotes: "/docs/query-advisor/release-notes",
                github: "#",
              },
            },
          ]}
        />
      </div>

      <div className="mt-8">
        <ProductCategoryComponent
          title="Data Integration"
          description="Tools for data streaming, ETL, and integration"
          products={[
            {
              icon: Share2,
              title: "AgensGraph-Stream",
              description: "Real-time data streaming for AgensGraph and PostgreSQL",
              links: {
                overview: "/docs/agensgraph-stream/overview",
                quickStart: "/docs/agensgraph-stream/quick-start",
                reference: "/docs/agensgraph-stream/reference",
                releaseNotes: "/docs/agensgraph-stream/release-notes",
                github: "https://github.com/skaiworldwide-oss/agensgraph-stream",
              },
            },
            {
              icon: RefreshCw,
              title: "ETL Tools",
              description: "Extract, transform, and load tools for database migration",
              links: {
                overview: "/docs/etl/overview",
                quickStart: "/docs/etl/quick-start",
                reference: "/docs/etl/reference",
                releaseNotes: "/docs/etl/release-notes",
                github: "#",
              },
            },
            {
              icon: Boxes,
              title: "Benchmark Workloads",
              description: "Performance testing tools for database products",
              links: {
                overview: "/docs/benchmarks/overview",
                quickStart: "/docs/benchmarks/quick-start",
                reference: "/docs/benchmarks/reference",
                releaseNotes: "/docs/benchmarks/release-notes",
                github: "https://github.com/skaiworldwide-oss/ldbc-snb-agensgraph",
              },
            },
          ]}
        />
      </div>
    </section>
  )
}
