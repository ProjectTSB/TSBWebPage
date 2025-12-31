import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

/**
 * Discord アバター自動更新スクリプト
 *
 * creators.ts に定義された Discord ユーザーのアバター画像を
 * Discord API から取得し、最新の状態に更新します
 */

const DATA_PATH = path.resolve("src/data/creators.ts")
const API_BASE = "https://discord.com/api/v10"
const DISCORD_TOKEN = process.env.DISCORD_TOKEN
const DRY_RUN = process.env.DRY_RUN === "1"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * creator 定義から Discord ID を抽出
 * link の users/{id} を優先し、なければ image の CDN URL から取得
 */
const extractDiscordId = (line) => {
  const linkMatch = line.match(/link:\s*"https:\/\/discord\.com\/users\/(\d+)"/)
  if (linkMatch) {
    return linkMatch[1]
  }
  const imageMatch = line.match(/image:\s*"https:\/\/cdn\.discordapp\.com\/avatars\/(\d+)\//)
  return imageMatch ? imageMatch[1] : null
}

/**
 * Discord の avatar hash から CDN URL を生成
 * アニメーションアバター (a_ で始まる) は GIF、それ以外は PNG
 */
const buildAvatarUrl = (id, avatarHash) => {
  if (!avatarHash) {
    return null
  }
  const isAnimated = avatarHash.startsWith("a_")
  const extension = isAnimated ? "gif" : "png"
  return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.${extension}?size=256`
}

/**
 * Discord API からユーザー情報を取得
 * レートリミット (429) の場合は待機して最大3回リトライ
 */
const fetchDiscordUser = async (id) => {
  const url = `${API_BASE}/users/${id}`
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bot ${DISCORD_TOKEN}`,
      },
    })

    if (response.status === 429) {
      const data = await response.json()
      const waitMs = Math.ceil((data.retry_after ?? 1) * 1000)
      await sleep(waitMs)
      continue
    }

    if (!response.ok) {
      throw new Error(`Discord API error for ${id}: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  throw new Error(`Discord API rate limit persisted for ${id}`)
}

// トークンチェック（DRY_RUN モードは除く）
if (!DISCORD_TOKEN && !DRY_RUN) {
  console.error("DISCORD_TOKEN is required (or set DRY_RUN=1 for a no-op run).")
  process.exit(1)
}

// creators.ts から Discord ID を収集
const content = await fs.readFile(DATA_PATH, "utf8")
const lines = content.split("\n")
const creatorIds = new Set()

for (const line of lines) {
  if (!line.includes("{ name:")) {
    continue
  }
  const id = extractDiscordId(line)
  if (id) {
    creatorIds.add(id)
  }
}

if (DRY_RUN) {
  console.log(`[dry-run] Found ${creatorIds.size} creator ids.`)
  process.exit(0)
}

// Discord API から最新のアバター URL を取得
const avatarById = new Map()
for (const id of creatorIds) {
  const user = await fetchDiscordUser(id)
  const url = buildAvatarUrl(id, user.avatar)
  if (!url) {
    console.warn(`No custom avatar for ${id}; keeping existing image.`)
    continue
  }
  avatarById.set(id, url)
}

// ファイル内容を更新（変更がある行のみ）
let updatedCount = 0
const updatedLines = lines.map((line) => {
  if (!line.includes("{ name:")) {
    return line
  }
  const id = extractDiscordId(line)
  if (!id) {
    return line
  }
  const newUrl = avatarById.get(id)
  if (!newUrl) {
    return line
  }
  const imageMatch = line.match(/image:\s*"([^"]*)"/)
  if (imageMatch && imageMatch[1] === newUrl) {
    return line
  }
  updatedCount += 1
  if (imageMatch) {
    return line.replace(/image:\s*"[^"]*"/, `image: "${newUrl}"`)
  }
  return line.replace(/name:\s*"[^"]*"/, (match) => `${match}, image: "${newUrl}"`)
})

if (updatedCount === 0) {
  console.log("No avatar changes detected.")
  process.exit(0)
}

await fs.writeFile(DATA_PATH, updatedLines.join("\n"), "utf8")
console.log(`Updated ${updatedCount} creator avatar(s).`)
