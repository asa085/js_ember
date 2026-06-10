import Service from '@ember/service';

// ★ Service = アプリ全体で共有されるシングルトン(Python で言う「1つだけ作るインスタンス」)
// 本来は Ember Data + API でやるところを、学習用に静的データで代用している
export default class CatalogService extends Service {
  products = [
    {
      id: '1',
      name: 'メカニカルキーボード',
      price: 15800,
      description: '茶軸。打鍵感が良くテスト自動化コードが捗る。',
    },
    {
      id: '2',
      name: '可変ダンベル 24kg',
      price: 32000,
      description: 'ダイヤル式で重量変更が一瞬。宅トレの相棒。',
    },
    {
      id: '3',
      name: '4K モニター 27インチ',
      price: 42800,
      description: 'Playwright のトレースビューアを並べても余裕の作業領域。',
    },
  ];

  all() {
    return this.products;
  }

  find(id) {
    // JS の find は Python の next(x for x in ... if ...) に相当
    return this.products.find((p) => p.id === id);
  }
}
