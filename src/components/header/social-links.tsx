import { socialLinks } from "@/data/social-links"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  showSearch?: boolean
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
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
  )
} 
