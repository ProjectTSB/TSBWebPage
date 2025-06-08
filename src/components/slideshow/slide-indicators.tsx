import { cn } from "@/lib/utils"

interface SlideIndicatorsProps {
  totalSlides: number
  currentIndex: number
  onSlideSelect: (index: number) => void
  showIndicators: boolean
}

export function SlideIndicators({ 
  totalSlides, 
  currentIndex, 
  onSlideSelect, 
  showIndicators 
}: SlideIndicatorsProps) {
  if (!showIndicators) return null

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          className={cn(
            "w-2 h-2 rounded-full transition-colors",
            index === currentIndex ? "bg-white" : "bg-white/50"
          )}
          onClick={() => onSlideSelect(index)}
          aria-label={`スライド ${index + 1} に移動`}
        />
      ))}
    </div>
  )
} 