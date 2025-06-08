# The Sky Blessing

## 技術スタック

- **フレームワーク**: React + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: shadcn/ui
- **ルーティング**: React Router DOM
- **アイコン**: React Icons, Radix UI Icons, Lucide React

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

ビルドされたサイトをローカルでプレビューできます。

## プロジェクト構造

```
src/
├── components/          # UIコンポーネント
│   ├── ui/              # shadcn/ui コンポーネント
│   ├── header/          # ヘッダー関連コンポーネント
│   ├── home/            # ホームページ用コンポーネント
│   ├── header.tsx       # メインヘッダー
│   ├── footer.tsx       # フッター
│   └── theme-provider.tsx
├── data/                # 静的データ
│   ├── social-links.tsx
│   ├── navigation.ts
│   └── map-features.ts
├── hooks/               # カスタムフック
│   └── use-scroll-animation.tsx
├── lib/                 # ユーティリティ
│   └── utils.ts
├── pages/               # ページコンポーネント
│   ├── Home.tsx
│   ├── Creator.tsx
│   ├── Download.tsx
│   ├── FAQ.tsx
│   └── License.tsx
├── App.tsx              # メインアプリケーション
├── main.tsx             # エントリーポイント
└── index.css            # グローバルスタイル
```
