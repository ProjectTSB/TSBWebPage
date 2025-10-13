import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SlideControlsProps {
  onPrevious: () => void
  onNext: () => void
  showControls: boolean
}

export function SlideControls({ onPrevious, onNext, showControls }: SlideControlsProps) {
  if (!showControls) return null

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        )}
        onClick={onPrevious}
      >
        <ChevronLeftIcon className="h-4 w-4" />
        <span className="sr-only">前のスライド</span>
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        )}
        onClick={onNext}
      >
        <ChevronRightIcon className="h-4 w-4" />
        <span className="sr-only">次のスライド</span>
      </Button>
    </>
  )
} 
