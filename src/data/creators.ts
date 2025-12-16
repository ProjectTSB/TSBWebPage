export type CreatorTag =
  | "管理者"
  | "バランス調整班"
  | "神器開発班"
  | "モブ開発班"
  | "建築班"
  | "リソース班"

export interface Creator {
  name: string
  image?: string
  role?: string
  description?: string
  link?: string
  tags?: CreatorTag[]
}

export const creators: Creator[] = [
  { name: "ハル", image: "https://cdn.discordapp.com/avatars/283035571096518657/e574ae2cd83b1dffa92929d97e49c988.png?size=256", link: "https://discord.com/users/283035571096518657", role: "プロジェクトオーナー", tags: ["管理者", "神器開発班"] },
  { name: "ちぇん", image: "https://cdn.discordapp.com/avatars/299512294994345985/fa76e4c11fb0209ac33d6c3e53aec7ad.png?size=256", link: "https://discord.com/users/299512294994345985", role: "プロジェクトリーダー", tags: ["神器開発班", "モブ開発班", "バランス調整班"] },
  { name: "はいいろ", image: "https://cdn.discordapp.com/avatars/423751993400492033/2229fd633b04dbb2552cb78eb49eb11b.png?size=256", link: "https://discord.com/users/423751993400492033", tags: ["神器開発班", "モブ開発班"] },
  { name: "uran", image: "https://cdn.discordapp.com/avatars/293673347701669888/b463a7f464cb2a11ee97489943f0953c.png?size=256", link: "https://discord.com/users/293673347701669888", tags: ["神器開発班", "モブ開発班", "建築班", "リソース班"] },
  { name: "瑠璃", image: "https://cdn.discordapp.com/avatars/586512673668071424/98114e8ad6525740365b9445f279c1c1.png?size=256", link: "https://discord.com/users/586512673668071424", tags: ["神器開発班", "モブ開発班"] },
  { name: "Yuzunosuke", image: "https://cdn.discordapp.com/avatars/716683476425900113/3d7d4de9a8bb678b3fbcb18eefa13d54.png?size=256", link: "https://discord.com/users/716683476425900113", tags: ["建築班"] },
  { name: "きつゅね", image: "https://cdn.discordapp.com/avatars/429814952321089536/2e6bcd330e1ef63565da37a5fda4b7d8.png?size=256", link: "https://discord.com/users/429814952321089536", tags: ["リソース班"] },
  { name: "まっしゅ", image: "https://cdn.discordapp.com/avatars/717223818875240459/a06f3dbf4f20c78a6420453e899154de.png?size=256", link: "https://discord.com/users/717223818875240459", tags: ["神器開発班", "リソース班"] },
  { name: "nutbox", image: "https://cdn.discordapp.com/avatars/262490951224655873/bc5b8df259a7a55e4715f386188ae623.png?size=256", link: "https://discord.com/users/262490951224655873" },
  { name: "ＩＷＢＴＫ", image: "https://cdn.discordapp.com/avatars/665606060845039627/ddf6c6cd537cff3079520b3d9240b336.png?size=256", link: "https://discord.com/users/665606060845039627", tags: ["建築班"] },
  { name: "最北のヒロッピー", image: "https://cdn.discordapp.com/avatars/225224805694046208/7c945a87caadad21df9153504b591b52.png?size=256", link: "https://discord.com/users/225224805694046208", tags: ["建築班"] },
  { name: "フレイシェル", image: "https://cdn.discordapp.com/avatars/275261413939740673/a_7240c0a0cc1050212834dcc509a2be2b.gif?size=256", link: "https://discord.com/users/275261413939740673" },
  { name: "pic", image: "https://cdn.discordapp.com/avatars/362506991756771328/9f2f0e8f1851cebc3c01d5e510a350ac.png?size=256", link: "https://discord.com/users/362506991756771328" },
  { name: "Piano58", image: "https://cdn.discordapp.com/avatars/230955669597978624/4327d42b83dabe3be9e09622eb20c234.png?size=256", link: "https://discord.com/users/230955669597978624" },
  { name: "氷鮭", image: "https://cdn.discordapp.com/avatars/581459644552052740/8d76f40f935995b752ee0a5e24ea9386.png?size=256", link: "https://discord.com/users/581459644552052740", tags: ["建築班"] },
  { name: "nemo", image: "https://cdn.discordapp.com/avatars/698372071066959914/b6ab049d7ee0fbc95d19239cdea10d3f.png?size=256", link: "https://discord.com/users/698372071066959914" },
  { name: "prince", image: "https://cdn.discordapp.com/avatars/472308859235467274/7dfee1c4a23da648957a2ef1386ae0ae.png?size=256", link: "https://discord.com/users/472308859235467274" },
  { name: "Chuzume", image: "https://cdn.discordapp.com/avatars/235404800685113346/35a2d99d3c7b3f2e22c98f3df67a8970.png?size=256", link: "https://discord.com/users/235404800685113346", tags: ["神器開発班", "モブ開発班", "建築班", "リソース班"] },
  { name: "Ella Coat", image: "https://cdn.discordapp.com/avatars/555609446051741697/a_1939f7a6566b1818c403b3e67261c304.gif?size=256", link: "https://discord.com/users/555609446051741697", tags: ["神器開発班", "モブ開発班", "建築班", "リソース班"] },
  { name: "MT", image: "https://cdn.discordapp.com/avatars/951106824302645268/5bf2b8e260fc0ae15245d0d71aef7b0b.png?size=256", link: "https://discord.com/users/951106824302645268" },
  { name: "AQuAS", image: "https://cdn.discordapp.com/avatars/262888185934118912/6c82959174b71bd2051b1cb2879d0a4d.png?size=256", link: "https://discord.com/users/262888185934118912" },
  { name: "anitmyan", image: "https://cdn.discordapp.com/avatars/519792415914197002/164decd5c2fb7176b9d51eaa8a1fd8ef.png?size=256", link: "https://discord.com/users/519792415914197002", tags: ["神器開発班", "建築班"] },
  { name: "yavu", image: "https://cdn.discordapp.com/avatars/389035656237809664/6ce82a43e642c8af12b9ff937bee0268.png?size=256", link: "https://discord.com/users/389035656237809664", tags: ["神器開発班", "モブ開発班", "リソース班"] },
  { name: "クマ", image: "https://cdn.discordapp.com/avatars/208112121848791040/a6ac49846c83e2cfa9c16fac5352b083.png?size=256", link: "https://discord.com/users/208112121848791040" },
  { name: "アカム３", image: "https://cdn.discordapp.com/avatars/393418172604088330/5d770890246eec2f40c7996217b17a7f.png?size=256", link: "https://discord.com/users/393418172604088330" },
  { name: "ばんく", image: "https://cdn.discordapp.com/avatars/527040104749989898/93b6b17d12f122707763309193b4ade9.png?size=256", link: "https://discord.com/users/527040104749989898", tags: ["建築班"] },
  { name: "ぬく", image: "https://cdn.discordapp.com/avatars/518783204874780689/f93faccd1bea6e06590207959bc414ee.png?size=256", link: "https://discord.com/users/518783204874780689", tags: ["モブ開発班", "リソース班"] },
  { name: "しゃもじ", image: "https://cdn.discordapp.com/avatars/747446504335212576/93100327df62c1537a528dec357ac7dd.png?size=256", link: "https://discord.com/users/747446504335212576", tags: ["リソース班"] },
  { name: "ぴっける", image: "https://cdn.discordapp.com/avatars/270218204356411393/852227eef698b61b4d9de50e67476280.png?size=256", link: "https://discord.com/users/270218204356411393" },
  { name: "ｶｰﾃﾝﾌﾙ", image: "https://cdn.discordapp.com/avatars/286654195589971969/2e9390e3b7d2f57046ef6f8f95ed823b.png?size=256", link: "https://discord.com/users/286654195589971969" },
  { name: "るーく", image: "https://cdn.discordapp.com/avatars/262502453373698049/9264e7eebaf6098c8676828d319a91fd.png?size=256", link: "https://discord.com/users/262502453373698049" },
  { name: "ウプマリン", image: "https://cdn.discordapp.com/avatars/398861641200041985/2ba62629da3e9d06af4f9566f8c69473.png?size=256", link: "https://discord.com/users/398861641200041985" },
  { name: "anminmakura", image: "https://cdn.discordapp.com/avatars/280365617616388096/caa343b855d6a4b187afabd3c77947ea.png?size=256", link: "https://discord.com/users/280365617616388096", tags: ["建築班"] },
  { name: "冴月ハル", image: "https://cdn.discordapp.com/avatars/718374095137407079/f14f34169c4c955f162b6e8c291e3b57.png?size=256", link: "https://discord.com/users/494832773425659924", tags: ["リソース班", "バランス調整班"] },
  { name: "Kemo", image: "https://cdn.discordapp.com/avatars/274760297473114113/34fa33117c77811d5c1e50f6d40d0a86.png?size=256", link: "https://discord.com/users/274760297473114113", tags: ["神器開発班"] },
  { name: "kiwi", image: "https://cdn.discordapp.com/avatars/288955969504018442/4c410828b6e585f9f46b8908785e4634.png?size=256", link: "https://discord.com/users/288955969504018442" },
  { name: "こま", image: "https://cdn.discordapp.com/avatars/280371481404375040/afa39681597535271321eb493a1d7e6b.png?size=256", link: "https://discord.com/users/280371481404375040" },
  { name: "なれんじ", image: "https://cdn.discordapp.com/avatars/287781483836342272/aa515f78e24cab15c61216164345ceab.png?size=256", link: "https://discord.com/users/287781483836342272", tags: ["神器開発班"] },
  { name: "トミー", image: "https://cdn.discordapp.com/avatars/294691527207288833/5cef2414c33b7465eff14ba85eed5db5.png?size=256", link: "https://discord.com/users/294691527207288833" },
  { name: "ふろーら", image: "https://cdn.discordapp.com/avatars/287778233703989248/8a00adea408180cb77551a3bd04d0673.png?size=256", link: "https://discord.com/users/287778233703989248", tags: ["神器開発班", "建築班"] },
  { name: "ノータッチ", image: "https://cdn.discordapp.com/avatars/275316020170850305/388788d0a9d74f7951d0d03f23bb9577.png?size=256", link: "https://discord.com/users/275316020170850305", tags: ["建築班"] },
  { name: "kaputina", image: "https://cdn.discordapp.com/avatars/490522733848035358/8834348ba52138d9777fe030e3818b42.png?size=256", link: "https://discord.com/users/490522733848035358", tags: ["神器開発班"] },
  { name: "逢坂", image: "https://cdn.discordapp.com/avatars/350600819562774529/c9015d434bb0c2869c4b1e798eabd362.png?size=256", link: "https://discord.com/users/350600819562774529" },
  { name: "RED1001", image: "https://cdn.discordapp.com/avatars/308148919504863234/5554ad6fc54555162ac77ecdb441fd63.png?size=256", link: "https://discord.com/users/308148919504863234", tags: ["バランス調整班"] }
]
