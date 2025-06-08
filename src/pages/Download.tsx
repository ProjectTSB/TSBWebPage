import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExclamationTriangleIcon, DownloadIcon } from "@radix-ui/react-icons"

export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">ダウンロード</h1>

        <Alert className="mb-8 border-amber-500 bg-amber-50 dark:bg-amber-950/20">
          <ExclamationTriangleIcon className="h-4 w-4 mt-1.5" />
          <AlertTitle className="text-amber-800 dark:text-amber-300 text-lg font-bold">
            【重要】安定版と最新版について
          </AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            The Sky Blessing には、以下の二種類のバージョンが存在します。
            <br />
            ダウンロードする際には、お間違いの無いようご注意下さい。
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">安定版</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="mb-4 flex-1">
                遊ぶにあたり重篤な不具合が無いと判断されたバージョンです。
                <br />
                基本的に、最新版がリリースされてから一, 二ヶ月程度で安定版として指定されます。
                <br />
                このバージョンは、当サイト上からもダウンロードすることが出来ます。
              </p>

              <div className="bg-muted p-4 rounded-lg mb-4 h-40">
                <h3 className="font-bold mb-2">バージョン</h3>
                <p>v0.1.6</p>

                <h3 className="font-bold mt-4 mb-2">対象 Minecraft バージョン</h3>
                <p>1.19 ~ 1.19.2</p>
              </div>

              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      安定版をダウンロード
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>ダウンロード・詳細情報</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* ダウンロードボタン */}
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <h3 className="font-bold mb-3 text-green-800 dark:text-green-300">マップ本体</h3>
                        <a 
                            href="https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v0.1.6/TheSkyBlessing.zip" 
                            className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                          安定板をダウンロード
                        </a>
                      </div>

                      {/* 過去バージョンからのアップデート情報 */}
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                        <h3 className="font-bold mb-3 text-blue-800 dark:text-blue-300">過去バージョンからのアップデート</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-semibold">データパック:</span>
                            <br />
                            <a 
                              href="https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v0.1.6/datapacks.zip" 
                              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              datapacks.zip をダウンロード
                            </a>
                          </div>
                          <div>
                            <span className="font-semibold">リソースパック:</span>
                            <br />
                            <a 
                              href="https://github.com/ProjectTSB/TheSkyBlessing/releases/download/v0.1.6/resources.zip" 
                              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              resources.zip をダウンロード
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* マルチプレイのリソースパック情報 */}
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                        <h3 className="font-bold mb-3 text-purple-800 dark:text-purple-300">マルチプレイのリソースパック情報</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-semibold">URL:</span>
                            <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded border">
                              <code className="text-xs break-all">
                                https://github.com/ProjectTSB/TSB-ResourcePack/releases/download/v0.1.6/resources.zip
                              </code>
                            </div>
                          </div>
                          <div>
                            <span className="font-semibold">SHA1:</span>
                            <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded border">
                              <code className="text-xs">
                                ed1e3fd2c5eaad147d8d55b17ab1585121be59c9
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">最新版</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="mb-4 flex-1">
                最新の要素や不具合修正などが含まれた新しいバージョンです。
                <br />
                ただし、新要素が追加された直後等はバランス調整ミスや重篤な不具合が存在する可能性があります。
                <br />
                このバージョンは、お問い合わせやサポートが簡単に行えるよう公式 Discord サーバーでのみダウンロードすることが出来ます。
              </p>

              <div className="bg-muted p-4 rounded-lg mb-4 h-40">
                <h3 className="font-bold mb-2">バージョン</h3>
                <p>v1.0.0</p>

                <h3 className="font-bold mt-4 mb-2">対象 Minecraft バージョン</h3>
                <p>1.20.4</p>
              </div>

              <Button asChild className="w-full">
                <a href="https://discord.com/invite/vPqHuQNMEv">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Discord サーバーでダウンロード
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">過去のバージョンを遊ばれている方へ</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800">
                このマップに使用されているデータパック / リソースパックを手動で更新していただく事で、現在遊ばれているマップに対して不具合修正や仕様変更等を適用することが可能です。
                <br />
                現在遊ばれている The Sky Blessing のバージョンを確認し、手動更新が可能なバージョンかをご確認ください。
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3 text-gray-800 border-b border-gray-200 pb-2">バージョンの確認方法</h3>
              <p className="bg-gray-50 p-3 rounded">マップデータに同梱されているReadme.txtをご確認ください。</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3 text-gray-800 border-b border-gray-200 pb-2">データパックの更新方法</h3>
              <ol className="list-decimal list-inside space-y-3 pl-2">
                <li>現在遊ばれているマップのワールドデータをバックアップしてください。</li>
                <li>
                  現在遊ばれているマップのバージョンと互換性のある最新バージョンのリリースよりdatapacks.zipをダウンロードしてください。
                </li>
                <li>現在遊ばれているマップデータの、datapacksフォルダを削除してください。</li>
                <li>
                  ダウンロードしたdatapacks.zipを展開し、展開されたdatapacksフォルダを現在遊ばれているマップデータに配置してください。
                </li>
              </ol>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3 text-gray-800 border-b border-gray-200 pb-2">リソースパックの更新方法</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-md mb-3 text-green-700">シングルプレイの場合</h4>
                <ol className="list-decimal list-inside space-y-3 pl-2">
                  <li>
                    現在遊ばれているマップのバージョンと互換性のある最新バージョンのリリースよりresources.zipをダウンロードしてください。
                  </li>
                  <li>現在遊ばれているマップデータの、resources.zipを削除してください。</li>
                  <li>ダウンロードしたresources.zipを現在遊ばれているマップデータに配置します。</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-md mb-3 text-purple-700">マルチプレイの場合</h4>
                <ol className="list-decimal list-inside space-y-3 pl-2">
                  <li>
                    現在遊ばれているマップのバージョンと互換性のある最新バージョンのリリースに記載されているリソースパックのURL及びSHA1をコピーしてください。
                  </li>
                  <li>server.propertiesのresource-packをコピーしたURLに置換します。</li>
                  <li>server.propertiesのresource-pack-sha1をコピーしたSHA1に置換します。</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
} 