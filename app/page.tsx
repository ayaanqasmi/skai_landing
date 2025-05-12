import { HeroSection } from "@/components/hero-section"
import { ProductFamilies } from "@/components/product-families"
import { EcosystemTools } from "@/components/ecosystem-tools"
import { MigrationSection } from "@/components/migration-section"
import { DeveloperGuides } from "@/components/developer-guides"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import { VersionSelector } from "@/components/version-selector"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="md:hidden" />
          <h1 className="text-lg font-semibold">SKAI Worldwide Docs</h1>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <VersionSelector />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <HeroSection />
        <ProductFamilies />
        <DeveloperGuides />
        <Footer />
      </div>
    </main>
  )
}
