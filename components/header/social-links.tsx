import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"
import { socialLinks } from "@/data/social-links"

interface SocialLinksProps {
  showSearch?: boolean
  className?: string
}

export function SocialLinks({ showSearch = true, className }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <Button key={social.name} variant="ghost" size="icon" asChild>
            <Link href={social.path} aria-label={social.name}>
              <IconComponent className="!h-6 !w-6" />
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
