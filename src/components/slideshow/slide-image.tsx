import { cn } from "@/lib/utils"

interface SlideImageProps {
  src: string
  alt: string
  isActive: boolean
  index: number
}

export function SlideImage({ src, alt, isActive, index }: SlideImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
        isActive ? "opacity-100" : "opacity-0"
      )}
      style={{ zIndex: isActive ? 1 : 0 }}
    />
  )
} 