import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoCircledIcon } from "@radix-ui/react-icons"

export default function LicensePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">ライセンス</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <InfoCircledIcon className="h-4 w-4" />
              動画投稿やライブ配信
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              本マップは、営利目的・非営利目的問わず、すべての配信サービスでの動画投稿・ライブ配信について一切の制限を行いません。
            </p>
            <p className="mb-4">
              視聴者へのマップ名・URLの記載は必須ではないですが、興味を持った視聴者の方々にも遊んで頂けると嬉しい限りですので、可能であれば記載をお願いいたします。（ただし、あくまで任意です。）
            </p>
            <p>他の規格についても必須ではないですが、ご一報頂けると開発チームが大喜びして開発の励みとなります。</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">建築データの二次配布</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              マップ内の建築物は改変・再配布することができます。
              <br />
              再配布する場合は、当サイトのURLを記載いただきますようお願い致します。
            </p>
            <p>
              ただし、データパックやリソースパックを含んだ再配布を行う場合はそのライセンスに従ってください。
              <br />
              再配布せず、動画投稿やライブ配信のみで利用する場合は当サイトのURLを記載する必要はございません。
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">データパックのライセンス</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">以下に記載があるものをご確認ください。</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a href="#" className="text-cyan-600 hover:underline">
                  ProjectTSB/TheSkyBlessing
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-600 hover:underline">
                  ProjectTSB/Asset
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-600 hover:underline">
                  ProjectTSB/Asset.AnimatedJava
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">リソースパックのライセンス</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">以下に記載があるものをご確認ください。</p>
            <ul className="list-disc list-inside">
              <li>
                <a href="#" className="text-cyan-600 hover:underline">
                  ProjectTSB/TSB-Resourcepack
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
