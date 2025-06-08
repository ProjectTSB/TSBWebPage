import { QuickLinkCard } from "./quick-link-card"
import { quickLinks } from "@/data/quick-links"

export function QuickLinksSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickLinks.map((link) => (
          <QuickLinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  )
}
