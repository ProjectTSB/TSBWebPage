"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { SlideImage } from "./slideshow/slide-image"
import { SlideControls } from "./slideshow/slide-controls"
import { SlideIndicators } from "./slideshow/slide-indicators"

interface FeatureSlideshowProps {
  images: string[]
  interval?: number
  className?: string
}

export function FeatureSlideshow({ images, interval = 5000, className }: FeatureSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  if (images.length === 0) {
    return (
      <div className={cn("relative w-full h-full bg-muted", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground">画像がありません</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("relative overflow-hidden group", className)}
      onMouseEnter={() => {
        setIsAutoPlaying(false)
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsAutoPlaying(true)
        setIsHovering(false)
      }}
    >
      {images.map((image, index) => (
        <SlideImage
          key={index}
          src={image}
          alt={`スライド ${index + 1}`}
          isActive={index === currentIndex}
          index={index}
        />
      ))}

      {/* オーバーレイグラデーション */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "",
        )}
      />

      <SlideControls onPrevious={goToPrevious} onNext={goToNext} showControls={images.length > 1} />

      <SlideIndicators
        totalSlides={images.length}
        currentIndex={currentIndex}
        onSlideSelect={goToSlide}
        showIndicators={images.length > 1}
      />
    </div>
  )
}
