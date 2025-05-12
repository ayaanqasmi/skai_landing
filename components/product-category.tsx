"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ProductInfo {
  icon: LucideIcon
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
  products: ProductInfo[]
}

export function ProductCategory({ title, description, products }: ProductCategoryProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="rounded-lg border">
      <CollapsibleTrigger asChild>
        <div className="flex cursor-pointer items-center justify-between p-4 hover:bg-muted/50">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCategoryCard
              key={product.title}
              icon={product.icon}
              title={product.title}
              description={product.description}
              links={product.links}
            />
          ))}
        </div>
        <CardContent>
              <Button asChild>
                <Link href="/products">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
      </CollapsibleContent>
    </Collapsible>
  )
}

function ProductCategoryCard({
  icon: Icon,
  title,
  description,
  links,
}: {
  icon: LucideIcon
  title: string
  description: string
  links: {
    overview: string
    quickStart: string
    reference: string
    releaseNotes: string
    github: string
  }
}) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-2">
          <div className="rounded-md bg-primary/10 p-1.5">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1 pt-0">
        <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
          <Link href={links.overview}>Overview</Link>
        </Button>
        <span className="text-muted-foreground">•</span>
        <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
          <Link href={links.quickStart}>Quick-Start</Link>
        </Button>
        <span className="text-muted-foreground">•</span>
        <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
          <Link href={links.reference}>Reference</Link>
        </Button>
        
      </CardFooter>
    </Card>
  )
}
