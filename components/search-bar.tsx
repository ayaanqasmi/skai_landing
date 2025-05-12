"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`relative flex items-center ${isExpanded ? "w-64" : "w-9"} transition-all duration-200`}>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Search className="h-4 w-4" />
      </button>
      <Input
        type="search"
        placeholder="Search documentation..."
        className={`pl-8 h-9 ${isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-200`}
        onBlur={() => setIsExpanded(false)}
      />
    </div>
  )
}
