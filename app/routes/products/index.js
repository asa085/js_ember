import Route from '@ember/routing/route';
import { service } from '@ember/service';

// ★ Route の仕事 = 「この画面に必要なデータを用意する」(pytest の fixture に近い)
export default class ProductsIndexRoute extends Route {
  @service catalog; // ← Service を注入(DI)。this.catalog で使えるようになる

  model() {
    // ここで return したものが、テンプレートに @model として渡る
    return this.catalog.all();
  }
}
