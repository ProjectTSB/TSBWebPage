"use client"

import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  showText?: boolean
  onClick?: () => void
}

export function Logo({ showText = true, onClick }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2" onClick={onClick}>
      <Image
        src="/TSB_icon_tuuka.png"
        alt="The Sky Blessing"
        width={32}
        height={32}
      />
      {showText && <span className="font-bold text-lg hidden sm:inline-block">The Sky Blessing</span>}
    </Link>
  )
}
