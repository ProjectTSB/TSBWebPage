import { DownloadIcon, PersonIcon, QuestionMarkCircledIcon, FileTextIcon } from "@radix-ui/react-icons"
import type { ComponentType } from "react"

export interface QuickLink {
  title: string
  description: string
  href: string
  icon: ComponentType<{ className?: string }>
}

export const quickLinks: QuickLink[] = [
  {
    title: "ダウンロード",
    description: "最新版をダウンロード",
    href: "/download",
    icon: DownloadIcon,
  },
  {
    title: "制作者",
    description: "制作チームについて",
    href: "/creator",
    icon: PersonIcon,
  },
  {
    title: "FAQ",
    description: "よくある質問",
    href: "/faq",
    icon: QuestionMarkCircledIcon,
  },
  {
    title: "ライセンス",
    description: "利用規約とライセンス",
    href: "/license",
    icon: FileTextIcon,
  },
]
