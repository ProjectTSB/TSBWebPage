"use client"

import { FeatureCard } from "./feature-card"
import { mapFeatures } from "@/data/map-features"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function MapFeaturesSection() {
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation<HTMLDivElement>()

  // アクセントカラーのバリエーション（緑のテーマ）
  const featureStyles = [
    {
      accentColor: "#10b981", // emerald-500
      accentColor2: "#059669", // emerald-600
    },
    {
      accentColor: "#059669", // emerald-600
      accentColor2: "#047857", // emerald-700
    },
    {
      accentColor: "#047857", // emerald-700
      accentColor2: "#065f46", // emerald-800
    },
    {
      accentColor: "#22c55e", // green-500
      accentColor2: "#16a34a", // green-600
    },
  ]

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className={cn("text-center mb-16 fade-in-up", isTitleVisible ? "visible" : "")}>
            <p className="text-2xl md:text-4xl font-medium text-purple-900 mt-20 mb-40">
              「この世界の島々は、呪われている。」
            </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            マップの特徴
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mapFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              accentColor={featureStyles[index % featureStyles.length].accentColor}
              accentColor2={featureStyles[index % featureStyles.length].accentColor2}
              animationDelay={100 + index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
