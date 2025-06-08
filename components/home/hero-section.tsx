import { Button } from "@/components/ui/button"
import { DownloadIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
      <Image
        src="/screenshots/SS1.png"
        alt="The Sky Blessing"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
        <div className="mb-4">
          <Image
            src="/tsb_logo_2.svg"
            alt="The Sky Blessing"
            width={700}
            height={210}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
