"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { cn } from "@/lib/utils"

const versions = [
  { value: "v2.15.0", label: "v2.15.0 (Latest)" },
  { value: "v2.14.0", label: "v2.14.0" },
  { value: "v2.13.0", label: "v2.13.0" },
  { value: "v2.x", label: "v2.x (Stable)" },
  { value: "v1.x", label: "v1.x (Legacy)" },
  { value: "archive", label: "Archive" },
]

export function VersionSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("v2.15.0")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[140px] justify-between">
          {value ? versions.find((version) => version.value === value)?.label : "Select version..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search version..." />
          <CommandList>
            <CommandEmpty>No version found.</CommandEmpty>
            <CommandGroup>
              {versions.map((version) => (
                <CommandItem
                  key={version.value}
                  value={version.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === version.value ? "opacity-100" : "opacity-0")} />
                  {version.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
