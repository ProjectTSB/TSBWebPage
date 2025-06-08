import { useState } from "react"
import { Link } from "react-router-dom"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { navigationItems } from "@/data/navigation"
import { socialLinks } from "@/data/social-links"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileMenu({ isOpen, onOpenChange }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onOpenChange(!isOpen)}
        className="h-10 w-10"
      >
        {isOpen ? (
          <Cross1Icon className="h-5 w-5" />
        ) : (
          <HamburgerMenuIcon className="h-5 w-5" />
        )}
        <span className="sr-only">メニューを開く</span>
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => onOpenChange(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.path}
                    className="text-muted-foreground hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 