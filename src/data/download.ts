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

export const stableVersion: StableVersionInfo = {
  version: "v1.0.5",
  minecraftVersion: "1.20.4",
  mapDownloadUrl: "https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v1.0.5/TheSkyBlessing.zip",
  datapackUrl: "https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v1.0.5/datapacks.zip",
  resourcePackUrl: "https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v1.0.5/resources.zip",
  multiplayResourcePackUrl: "https://github.com/ProjectTSB/TSB-ResourcePack/releases/download/v1.0.5/resources.zip",
  resourcePackSha1: "d43aa650558cac9262045bedf3e6f7501100233e",
}

export const latestVersion: LatestVersionInfo = {
  version: "v1.0.5",
  minecraftVersion: "1.20.4",
  discordUrl: "https://project-tsb.org/discord",
}
