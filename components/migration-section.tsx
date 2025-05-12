"use client"
import { ArrowDownToLine, Database, FileJson, GitMerge, MoveRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ProductCategory } from "@/components/product-category"

export function MigrationSection() {
  return (
    <section id="migration-data" className="py-16 scroll-mt-20">
      <SectionHeader
        title="Migration & Data Imports"
        description="Tools and utilities for migrating data to SKAI database products"
      />

      <ProductCategory
        title="Database Migration"
        description="Tools for migrating from other database systems"
        products={[
          {
            icon: MoveRight,
            title: "Migration Toolkit",
            description: "Comprehensive toolkit for database migration to PostgreSQL",
            links: {
              overview: "/docs/migration-toolkit/overview",
              quickStart: "/docs/migration-toolkit/quick-start",
              reference: "/docs/migration-toolkit/reference",
              releaseNotes: "/docs/migration-toolkit/release-notes",
              github: "#",
            },
          },
          {
            icon: FileJson,
            title: "Oracle Migration",
            description: "Specialized tools for Oracle to PostgreSQL migration",
            links: {
              overview: "/docs/oracle-migration/overview",
              quickStart: "/docs/oracle-migration/quick-start",
              reference: "/docs/oracle-migration/reference",
              releaseNotes: "/docs/oracle-migration/release-notes",
              github: "#",
            },
          },
          {
            icon: GitMerge,
            title: "Data Migration Service",
            description: "Cloud-based service for automated database migration",
            links: {
              overview: "/docs/data-migration-service/overview",
              quickStart: "/docs/data-migration-service/quick-start",
              reference: "/docs/data-migration-service/reference",
              releaseNotes: "/docs/data-migration-service/release-notes",
              github: "#",
            },
          },
        ]}
      />

      <div className="mt-8">
        <ProductCategory
          title="Sample Datasets"
          description="Ready-to-use datasets and import tools"
          products={[
            {
              icon: Database,
              title: "IMDB Import",
              description: "Import IMDB dataset into AgensGraph for graph analysis",
              links: {
                overview: "/docs/import-imdb/overview",
                quickStart: "/docs/import-imdb/quick-start",
                reference: "/docs/import-imdb/reference",
                releaseNotes: "/docs/import-imdb/release-notes",
                github: "https://github.com/skaiworldwide-oss/import_imdb",
              },
            },
            {
              icon: FileJson,
              title: "Northwind Import",
              description: "Import Northwind dataset with relational and graph representations",
              links: {
                overview: "/docs/import-northwind/overview",
                quickStart: "/docs/import-northwind/quick-start",
                reference: "/docs/import-northwind/reference",
                releaseNotes: "/docs/import-northwind/release-notes",
                github: "https://github.com/skaiworldwide-oss/import-northwind",
              },
            },
            {
              icon: ArrowDownToLine,
              title: "AgensPop Spark",
              description: "Apache Spark connector for big data processing with graph data",
              links: {
                overview: "/docs/agenspop-spark/overview",
                quickStart: "/docs/agenspop-spark/quick-start",
                reference: "/docs/agenspop-spark/reference",
                releaseNotes: "/docs/agenspop-spark/release-notes",
                github: "https://github.com/skaiworldwide-oss/agenspop-spark",
              },
            },
          ]}
        />
      </div>
    </section>
  )
}
