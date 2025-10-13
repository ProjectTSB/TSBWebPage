import { Link } from "react-router-dom"
import Icon from "@/assets/tsb_icon.png?format=webp&h=256&imagetools"

interface LogoProps {
  showText?: boolean
}

export function Logo({ showText = true }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={Icon}
        alt="The Sky Blessing"
        className="h-8 w-8"
      />
      {showText && (
        <span className="font-bold text-lg">The Sky Blessing</span>
      )}
    </Link>
  )
}
