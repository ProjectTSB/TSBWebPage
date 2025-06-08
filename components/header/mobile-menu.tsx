"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons"
import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { SocialLinks } from "./social-links"

interface MobileMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileMenu({ isOpen, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild className="md:hidden ml-auto">
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <Logo showText={true} onClick={() => onOpenChange(false)} />
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <Cross2Icon className="h-6 w-6" />
            </Button>
          </div>

          <div className="py-6">
            <Navigation className="flex-col gap-4" onLinkClick={() => onOpenChange(false)} />
          </div>

          <div className="mt-auto border-t pt-4">
            <SocialLinks showSearch={false} className="flex gap-4" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
