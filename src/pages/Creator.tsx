import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { creators } from "@/data/creators"

export default function CreatorPage() {
  const sortedCreators = [...creators].sort((a, b) =>
    a.name.localeCompare(b.name, 'ja', { numeric: true, sensitivity: 'base' })
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-4xl font-bold">製作者一覧</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sortedCreators.map((creator, index) => {
            const CardWrapper = creator.link ? 'a' : 'div'
            const cardProps = creator.link
              ? { href: creator.link, target: "_blank", rel: "noopener noreferrer" }
              : {}

            return (
              <CardWrapper key={index} {...cardProps}>
                <Card className={`overflow-hidden transition-shadow ${creator.link ? 'hover:shadow-md cursor-pointer' : 'hover:shadow-sm'}`}>
                  <div className="aspect-square relative">
                    <img src={creator.image || "/placeholder.svg"} alt={creator.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-3 text-center h-[132px] flex flex-col">
                    <p className="font-medium truncate mb-2 shrink-0">{creator.name}</p>
                    <div className="flex-1 flex items-start justify-center overflow-hidden">
                      {creator.tags && creator.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center content-start">
                          {creator.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-[10px] px-2 py-0.5 leading-tight"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CardWrapper>
            )
          })}
        </div>

        <div className="mt-16 bg-muted p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">製作者募集中</h2>
          <p className="mb-2">現在マップ製作を手伝ってくださるメンバーを募集しています。</p>
          <p className="mb-2">
            興味がありましたら{" "}
            <a href="https://x.com/haru_pilkul" className="text-cyan-600 hover:underline">
              @haru_pilkul
            </a>{" "}
            までご連絡ください。
          </p>
          <p className="text-sm text-muted-foreground">
            ※参加要望を頂いてもご希望に添えない場合があります。その時はごめんなさい！
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
