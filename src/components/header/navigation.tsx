import { Link } from "react-router-dom"
import { navigationItems } from "@/data/navigation"
import { cn } from "@/lib/utils"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
} 