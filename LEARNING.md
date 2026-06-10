# Ember Study App 学習ガイド

## 起動方法(要 Node.js 18 以上)

```bash
npm install        # 初回のみ(数分かかります)
npm start          # 開発サーバー起動
# → http://localhost:4200 をブラウザで開く
```

## まず観察すること

1. `/products` を開く → `app/router.js` → `app/routes/products/index.js` → `app/templates/products/index.hbs` の流れを目で追う
2. 商品名をクリックして `/products/2` へ → URL の `:product_id` が `app/routes/products/detail.js` の `params` に入る様子を確認
3. 「詳細を見る」ボタン → `@tracked` と `@action` の組み合わせで画面が更新される

## 改造課題(おすすめ順)

1. **商品を1件追加する** … `app/services/catalog.js` にデータを足すだけ。保存すると自動リロードされる
2. **`@tracked` を外してみる** … `product-card.js` の `@tracked` を消すとボタンが効かなくなる。なぜかを説明できれば合格
3. **新しいページを作る** … `router.js` に `this.route('contact')` を追加し、`app/templates/contact.hbs` を作る
4. **合計金額を表示する** … `products/index.hbs` に全商品の合計を出す(getter の練習。`routes` か component に `get total()` を書く)
5. **E2E テストを書く** … `e2e/products.spec.js` を参考に、課題3で作ったページのテストを追加

## デバッグのコツ

- テンプレート内に `{{log @model}}` と書くとコンソールに出力される(Python の print デバッグ相当)
- ブラウザ拡張「Ember Inspector」で Route / Component ツリーが見える
