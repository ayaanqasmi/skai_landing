"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  Database,
  GitBranch,
  Github,
  Home,
  LifeBuoy,
  Network,
  Server,
  Settings,
  Share2,
  Workflow,
  Cpu,
  Puzzle,
  MoveRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DocsSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          <div className="flex flex-col">
            <img
              src="https://www.skaiworldwide.com/_next/static/media/SKAI%20worldwide%20basic%20logo.f06b4cc8.png"
              alt="SKAI logo"
              className="w-32 h-auto" // adjust width here
            />
          </div>

        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>RDBMS Family</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#rdbms-family">
                    <Cpu />
                    <span>EDB Postgres AI</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#rdbms-family">
                    <Database />
                    <span>Core Database Products</span>
                  </Link>
                </SidebarMenuButton>
                
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#rdbms-family">
                    <Server />
                    <span>Platforms & Tools</span>
                  </Link>
                </SidebarMenuButton>
                
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#rdbms-family">
                    <Puzzle />
                    <span>Extensions & Connectors</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#rdbms-family">
                    <MoveRight />
                    <span>Migration & Integration</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>GDBMS Family</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#gdbms-family">
                    <Network />
                    <span>AgensGraph</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#gdbms-family">
                    <GitBranch />
                    <span>Apache AGE</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#gdbms-family">
                    <Share2 />
                    <span>Visualization UIs</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="#gdbms-family">AGViewer</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="#gdbms-family">AGExplorer</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Guides</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#developer-guides">
                    <Settings />
                    <span>Developer Guides</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex flex-col gap-2">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <LifeBuoy className="h-4 w-4" />
            <span>Support</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
