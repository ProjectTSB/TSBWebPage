"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
        onClick={onPrevious}
        aria-label="前の画像"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
        onClick={onNext}
        aria-label="次の画像"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </>
  )
}
