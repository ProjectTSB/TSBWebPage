import { Card, CardContent } from "@/components/ui/card"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import type { QuickLink } from "@/data/quick-links"

interface QuickLinkCardProps {
  link: QuickLink
}

export function QuickLinkCard({ link }: QuickLinkCardProps) {
  const IconComponent = link.icon

  return (
    <Link href={link.href}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center text-center p-6">
          <IconComponent className="h-12 w-12 mb-4 text-cyan-500" />
          <h3 className="text-xl font-bold mb-2">{link.title}</h3>
          <p className="text-muted-foreground">{link.description}</p>
          <ChevronRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-sky-600 transition-colors" />
        </CardContent>
      </Card>
    </Link>
  )
}
