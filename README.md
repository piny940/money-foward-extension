# Money Forward Extension

マネーフォワード ME のトップページに、現在の貯金額と今月の収支をまとめたパネルを重ねて表示する Chrome 拡張機能です。

## 機能

- `https://moneyforward.com/` を開くと、画面右上に「収支管理」パネルを表示します。
- 口座一覧（銀行・カード・現金・電子マネー/プリペイド・通販）の残高を合算して、現時点の貯金額を算出します。
- 「先月までの貯金 + (今月の収入 - 今月の支出) = 今月の貯金」という内訳で金額を表示します。

集計ロジックは [src/lib/balance.ts](src/lib/balance.ts) にあります。毎月の仕送り額や集計から除外する金額は作者個人の値がハードコードされているため、使う際はこのファイルの定数を直接書き換えてください。

## 使い方

1. 下記の手順でビルドし、`dist/` を生成します。
2. Chrome で `chrome://extensions` を開き、デベロッパーモードを ON にします。
3. 「パッケージ化されていない拡張機能を読み込む」から `dist/` を選択します。
4. `https://moneyforward.com/` を開くとパネルが表示されます。

## 開発

### 必要環境

- Node.js 24
- Yarn

### セットアップ

```bash
yarn install
```

### コマンド

| コマンド          | 説明                                              |
| ----------------- | ------------------------------------------------- |
| `yarn dev`        | 開発ビルド（`dist/` に出力）                      |
| `yarn watch`      | 変更を監視しながら開発ビルド                      |
| `yarn prod`       | 本番ビルド（`dist/` に出力）                      |
| `yarn release`    | 本番ビルド後に `release/extension.zip` を作成     |
| `yarn typecheck`  | 型チェック                                        |
| `yarn lint`       | prettier + oxlint（自動修正あり）                 |
| `yarn lint-check` | prettier + oxlint のチェックのみ（CI と同じ内容） |

### 技術構成

React 19 / TypeScript / Bootstrap 5 / webpack（esbuild-loader）/ Manifest V3 の content script。

金額の取得はマネーフォワードのページの DOM 解析に依存しているため、サイト側の HTML が変更されると動作しなくなる可能性があります。

## ライセンス

Apache-2.0（[LICENSE](LICENSE) を参照）
