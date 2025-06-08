"use client"

import type React from "react"
import { FeatureSlideshow } from "@/components/feature-slideshow"
import type { MapFeature } from "@/data/map-features"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  feature: MapFeature
  accentColor?: string
  accentColor2?: string
  animationDelay?: number
  className?: string
  size?: "normal" | "large"
}

export function FeatureCard({
  feature,
  accentColor = "#06b6d4", // cyan-500
  accentColor2 = "#0ea5e9", // sky-500
  animationDelay = 0,
  className,
  size = "normal",
}: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "feature-card shadow-lg",
        isVisible ? "visible" : "",
        size === "large" ? "fade-in-up" : "fade-in-right",
        className,
      )}
      style={
        {
          "--card-accent-color": accentColor,
          "--card-accent-color-2": accentColor2,
          animationDelay: `${animationDelay}ms`,
        } as React.CSSProperties
      }
    >
      <div className="relative overflow-hidden rounded-t-lg aspect-video">
        <FeatureSlideshow images={feature.images} className="h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-cyan-600">{feature.title}</h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{feature.description}</p>
      </div>
    </div>
  )
}
