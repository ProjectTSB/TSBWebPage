export interface VersionInfo {
  version: string
  minecraftVersion: string
}

export interface StableVersionInfo extends VersionInfo {
  mapDownloadUrl: string
  datapackUrl: string
  resourcePackUrl: string
  multiplayResourcePackUrl: string
  resourcePackSha1: string
}

export interface LatestVersionInfo extends VersionInfo {
  discordUrl: string
}

export interface SpecialVersionInfo extends VersionInfo {
  id: string
  name: string
  description: string[]
  mapDownloadUrl: string
  multiplayResourcePackUrl: string
  resourcePackSha1: string
}

export const stableVersion: StableVersionInfo = {
  version: "v1.0.6",
  minecraftVersion: "1.20.4",
  mapDownloadUrl: "https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v1.0.6/TheSkyBlessing.zip",
  datapackUrl: "https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v1.0.6/datapacks.zip",
  resourcePackUrl: "https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v1.0.6/resources.zip",
  multiplayResourcePackUrl: "https://github.com/ProjectTSB/TSB-ResourcePack/releases/download/v1.0.6/resources.zip",
  resourcePackSha1: "0360d3e3b5a1e8b8e9f3e15b2fdc2caaa601a403",
}

export const latestVersion: LatestVersionInfo = {
  version: "v1.0.6",
  minecraftVersion: "1.20.4",
  discordUrl: "https://project-tsb.org/discord",
}

export const specialVersions: SpecialVersionInfo[] = [
]
