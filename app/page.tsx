import Header from "@/components/header"
import Footer from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { MapFeaturesSection } from "@/components/home/map-features-section"
import { YoutubeSection } from "@/components/home/youtube-section"
import { HistorySection } from "@/components/home/history-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <MapFeaturesSection />
      <YoutubeSection />
      <Footer />
    </div>
  )
}
