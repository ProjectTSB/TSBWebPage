export interface NavigationItem {
  name: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  { name: "製作者一覧", href: "/creator" },
  { name: "ダウンロード", href: "/download" },
  { name: "ライセンス", href: "/license" },
  { name: "よくある質問", href: "/faq" },
] 
