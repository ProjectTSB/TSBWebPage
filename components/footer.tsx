import Link from "next/link"
import Image from "next/image"
import { socialLinks } from "@/data/social-links"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-gray-50">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSB_icon_tuuka-05LA0CWT5ahji62dPy551OiR8ak5FS.png"
              alt="The Sky Blessing"
              width={32}
              height={32}
            />
            <span className="font-bold">The Sky Blessing</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            「この世界の島々は、呪われている。」
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-cyan-600">マップ</h3>
            <div className="flex flex-col gap-1">
              <Link href="/creator" className="text-sm text-muted-foreground hover:text-blue-500">
                製作者一覧
              </Link>
              <Link href="/download" className="text-sm text-muted-foreground hover:text-cyan-500">
                ダウンロード
              </Link>
              <Link href="/license" className="text-sm text-muted-foreground hover:text-cyan-500">
                ライセンス
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-cyan-500">
                よくある質問
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-blue-600">コミュニティ</h3>
            <div className="flex flex-col gap-1">
              
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.path} 
                  className="text-sm text-muted-foreground hover:text-blue-500" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <h3 className="font-medium text-sky-600">サポート</h3>
            <div className="flex flex-col gap-1">
              <Link href="https://scriptarts.jp/" className="text-sm text-muted-foreground hover:text-sky-500">
                ScriptArts
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} The Sky Blessing. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              
              return (
                <Link 
                  key={social.name}
                  href={social.path} 
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
