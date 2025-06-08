"use client"

import { useState } from "react"
import { Logo } from "./header/logo"
import { Navigation } from "./header/navigation"
import { SocialLinks } from "./header/social-links"
import { MobileMenu } from "./header/mobile-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo showText={true} />

        <Navigation className="hidden md:flex flex-1 ml-6" />

        <SocialLinks showSearch={true} className="hidden md:flex items-center gap-4" />

        <MobileMenu isOpen={isOpen} onOpenChange={setIsOpen} />
      </div>
    </header>
  )
}
