# 赤穂緞通工房 東浜 LP

赤穂緞通工房 東浜の集客用ランディングページです。既存公式サイトを置き換えるものではなく、ギャラリー見学予約・問い合わせにつなげる入口ページとして作成しています。

## ファイル構成

- `index.html`：日本語版
- `en/index.html`：英語版
- `styles.css`：共通スタイル
- `app.js`：共通JavaScript
- `assets/`：写真・ロゴ・作品画像

## 画像の差し替え方法

以下のファイル名で `assets` フォルダに画像を配置してください。

- `assets/hero.jpg`：ファーストビューのメイン写真
- `assets/gallery-01.jpg`：作品ギャラリー 1
- `assets/gallery-02.jpg`：作品ギャラリー 2
- `assets/gallery-03.jpg`：作品ギャラリー 3
- `assets/gallery-04.jpg`：作品ギャラリー 4

同じファイル名で差し替えれば、HTML側の変更は不要です。画像は横幅 1600px 前後の JPG を推奨します。表示が重い場合は、画質を保ちながら 300KB から 800KB 程度に圧縮してください。

ロゴ画像を使用する場合は、`index.html` と `en/index.html` の `.brand` 内を画像タグに置き換えてください。現在はテキストロゴとして「東浜」を表示しています。

## CTAリンクの変更

各HTMLファイル上部に CTA リンクのコメントをまとめています。

現在は電話リンクと Google マップ検索リンクを設定しています。予約フォームや問い合わせフォームができた場合は、該当する `href` を新しいURLに変更してください。

## GitHub Pagesで公開する手順

1. このフォルダを GitHub リポジトリに push します。
2. GitHub のリポジトリ画面で `Settings` を開きます。
3. `Pages` を開きます。
4. `Build and deployment` の `Source` を `Deploy from a branch` にします。
5. `Branch` で `main`、フォルダは `/root` を選択して保存します。
6. 数分後に表示されるURLへアクセスします。

日本語版は公開URL直下、英語版は `/en/` で表示されます。
