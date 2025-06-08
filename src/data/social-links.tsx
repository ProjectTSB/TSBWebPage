import type React from "react"
import { FaDiscord, FaYoutube, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import type { ComponentType } from "react"

export interface SocialLink {
  name: string
  path: string
  icon: ComponentType<{ className?: string }>
}

export const socialLinks = [
  { name: "Discord", path: "https://discord.com/invite/vPqHuQNMEv", icon: FaDiscord },
  { name: "X", path: "https://x.com/TheSkyBlessing", icon: FaXTwitter },
  { name: "YouTube", path: "https://www.youtube.com/@TheSkyBlessing", icon: FaYoutube },
  { name: "GitHub", path: "https://github.com/ProjectTSB", icon: FaGithub },
] 