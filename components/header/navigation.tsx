"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { navigationRoutes } from "@/data/navigation"

interface NavigationProps {
  className?: string
  onLinkClick?: () => void
}

export function Navigation({ className, onLinkClick }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-6 text-sm", className)}>
      {navigationRoutes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className={cn(
            "transition-colors hover:text-cyan-500",
            pathname === route.path ? "text-foreground font-medium border-b-2 border-cyan-500" : "text-foreground/60",
          )}
          onClick={onLinkClick}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  )
}
