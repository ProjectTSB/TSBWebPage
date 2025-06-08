import Image from "next/image"
import { cn } from "@/lib/utils"

interface SlideImageProps {
  src: string
  alt: string
  isActive: boolean
  index: number
}

export function SlideImage({ src, alt, isActive, index }: SlideImageProps) {
  return (
    <div className={cn("absolute inset-0 transition-opacity duration-1000", isActive ? "opacity-100" : "opacity-0")}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority={index === 0} />
    </div>
  )
}
