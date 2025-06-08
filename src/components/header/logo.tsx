import { Link } from "react-router-dom"

interface LogoProps {
  showText?: boolean
}

export function Logo({ showText = true }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/TSB_icon_tuuka.png"
        alt="The Sky Blessing"
        className="h-8 w-8"
      />
      {showText && (
        <span className="font-bold text-lg">The Sky Blessing</span>
      )}
    </Link>
  )
} 