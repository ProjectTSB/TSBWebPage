import { Button } from "@/components/ui/button"
import { DownloadIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function DownloadCTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">今すぐ冒険を始めよう</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          The Sky Blessingの世界で、あなただけの冒険を始めましょう。
          無料でダウンロードして、空に浮かぶ島々の謎を解き明かしてください。
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg">
          <Link href="/download">
            <DownloadIcon className="mr-2 h-5 w-5" />
            ダウンロードページへ
          </Link>
        </Button>
      </div>
    </section>
  )
}
