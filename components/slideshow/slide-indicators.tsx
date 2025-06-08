"use client"

import { cn } from "@/lib/utils"

interface SlideIndicatorsProps {
  totalSlides: number
  currentIndex: number
  onSlideSelect: (index: number) => void
  showIndicators: boolean
}

export function SlideIndicators({ totalSlides, currentIndex, onSlideSelect, showIndicators }: SlideIndicatorsProps) {
  if (!showIndicators) return null

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80",
          )}
          onClick={() => onSlideSelect(index)}
          aria-label={`スライド ${index + 1} に移動`}
        />
      ))}
    </div>
  )
}
