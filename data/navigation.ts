export interface NavigationRoute {
  name: string
  path: string
}

export const navigationRoutes: NavigationRoute[] = [
  { name: "ホーム", path: "/" },
  { name: "製作者", path: "/creator" },
  { name: "ダウンロード", path: "/download" },
  { name: "よくある質問", path: "/faq" },
  { name: "ライセンス", path: "/license" },
  { name: "ご支援", path: "https://tsb.booth.pm/" },
]
