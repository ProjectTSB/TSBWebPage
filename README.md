# TheSkyBlessing

Next.jsとshadcn/uiを使用したモダンなWebアプリケーションです。

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) (App Router)
- **言語**: TypeScript
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **UIコンポーネント**: [shadcn/ui](https://ui.shadcn.com/)

## 主要な依存関係

- React
- Radix UI プリミティブ
- Tailwind CSS
- TypeScript 5
- その他多数のUIコンポーネントライブラリ

## セットアップ

### 前提条件

- Node.js (推奨: 18.x以上)
- npm または yarn

### インストールと起動

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npx next dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

### その他のコマンド

```bash
# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start
```

## プロジェクト構造

```
├── app/                 # Next.js App Router
├── components/          # Reactコンポーネント
│   └── ui/              # shadcn/ui コンポーネント
├── hooks/               # カスタムフック
├── lib/                 # ユーティリティ関数
├── public/              # 静的ファイル
├── styles/              # スタイルファイル
└── data/                # データファイル
```

## 開発

このプロジェクトはshadcn/uiを使用します。新しいコンポーネントを追加する場合は、shadcn/ui CLIを使用できます：

```bash
npx shadcn@latest add [component-name]
```
