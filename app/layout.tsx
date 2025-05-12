import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DocsSidebar } from "@/components/docs-sidebar"

// Define the Satoshi font for headlines
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
})

// Define the Pretendard font for titles
const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
})

// Define the Aptos Narrow font for text
const aptosNarrow = localFont({
  src: [
    {
      path: "../public/fonts/AptosNarrow-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AptosNarrow-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/AptosNarrow-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aptos-narrow",
})

export const metadata: Metadata = {
  title: "SKAI Worldwide Documentation",
  description: "All the RDBMS, Graph-DBMS, tools, and guides you need—one unified hub.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${satoshi.variable} ${pretendard.variable} ${aptosNarrow.variable}`}
    >
      <body className="font-text">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <DocsSidebar />
              <div className="flex-1">{children}</div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
