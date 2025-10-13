import IslandsA from "@/assets/screenshots/islands/a.png?format=webp&h=360&imagetools"
import IslandsB from "@/assets/screenshots/islands/b.png?format=webp&h=360&imagetools"
import IslandsC from "@/assets/screenshots/islands/c.png?format=webp&h=360&imagetools"
import IslandsD from "@/assets/screenshots/islands/d.png?format=webp&h=360&imagetools"
import IslandsE from "@/assets/screenshots/islands/e.png?format=webp&h=360&imagetools"
import IslandsF from "@/assets/screenshots/islands/f.png?format=webp&h=360&imagetools"
import IslandsG from "@/assets/screenshots/islands/g.png?format=webp&h=360&imagetools"
import IslandsH from "@/assets/screenshots/islands/h.png?format=webp&h=360&imagetools"

import TempleNyaptov from "@/assets/screenshots/temple/nyaptov.png?format=webp&h=360&imagetools"
import TempleFlora from "@/assets/screenshots/temple/flora.png?format=webp&h=360&imagetools"
import TempleUrban from "@/assets/screenshots/temple/urban.png?format=webp&h=360&imagetools"
import TempleRumor from "@/assets/screenshots/temple/rumor.png?format=webp&h=360&imagetools"
import TempleWiki from "@/assets/screenshots/temple/wi-ki.png?format=webp&h=360&imagetools"

import Artifacts1 from "@/assets/screenshots/artifacts/1.png?format=webp&h=360&imagetools"
import Artifacts2 from "@/assets/screenshots/artifacts/2.png?format=webp&h=360&imagetools"
import Artifacts3 from "@/assets/screenshots/artifacts/3.png?format=webp&h=360&imagetools"

import AngelA from "@/assets/screenshots/angel/a.png?format=webp&h=360&imagetools"
import AngelB from "@/assets/screenshots/angel/b.png?format=webp&h=360&imagetools"
import AngelC from "@/assets/screenshots/angel/c.png?format=webp&h=360&imagetools"

export interface MapFeature {
  title: string
  description: string
  images: string[]
}

export const mapFeatures: MapFeature[] = [
  {
    title: "試練と報酬が待つ数々の「浮島」",
    description:
      "この世界には、60 を超えるさまざまな特徴を持つ「浮島」が空に点在しています。\n各島には、凶悪な敵や、豪華な報酬、呪われた神器が存在し、あなたが訪れるのを待っています",
    images: [IslandsA, IslandsB, IslandsC, IslandsD, IslandsE, IslandsF, IslandsG, IslandsH],
  },
  {
    title: "個性豊かな五柱の「神」",
    description:
      "この世界には個性豊かな五柱の「神」が存在します\nあなたはいずれかの神を信仰し、神器を扱う力と多彩な恩恵を得ることが出来ます",
    images: [TempleNyaptov, TempleFlora, TempleUrban, TempleRumor, TempleWiki],
  },
  {
    title: "冒険を彩る数々の「神器」",
    description:
      "この世界には、特別な力を有する「神器」と呼ばれるアイテムが存在します\n「神器」は、通常の武器では太刀打ちできない強力なモンスターとの戦いや、島々の攻略をサポートしてくれます",
    images: [Artifacts1, Artifacts2, Artifacts3],
  },
  {
    title: "浄化を阻む数々の「天使」",
    description:
      "いくつかの浮島には、呪いの浄化を阻む「天使」が存在します\nその姿は神々しく、圧倒的な力で各地の島を守護しています",
    images: [AngelA, AngelB, AngelC],
  },
]
