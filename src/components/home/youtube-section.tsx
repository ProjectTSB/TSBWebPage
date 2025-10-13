import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function YoutubeSection() {
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="mb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="aspect-video w-full mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/DV2TLd6dgII"
            title="The Sky Blessing プレイ動画"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
} 
